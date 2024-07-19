import React, { useEffect, useState } from 'react';
import padel from '../assets/padel.jpg';
import team1 from '../assets/person2.png';
import team2 from '../assets/person3.png';
import Players from '../components/Players';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import { Fade } from 'react-awesome-reveal';
import Timer from '../components/Timer';
import DetailePlayers from '../components/DetailePlayers';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export default function MatchPage() {
  const [teamA, setteamA] = useState('TeamA');
  const { id } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  const handleAccept = async (player) => {
    const matchRef = doc(db, 'matches', id);
    const matchSnapshot = await getDoc(matchRef);
    const matchData = matchSnapshot.data();

    const team = player.team;
    const teamArray = matchData[`team` + team];

    // Find the first empty spot in the team array
    const emptyIndex = teamArray.findIndex((p) => !p);
    if (emptyIndex !== -1) {
      teamArray[emptyIndex] = {
        name: player.name,
        point: player.point,
        userId: player.userId,
      };

      await updateDoc(matchRef, {
        pending: arrayRemove(player),
        [`team` + team]: teamArray,
      });

      setMatchData((prevData) => ({
        ...prevData,
        pending: prevData.pending.filter((p) => p.userId !== player.userId),
        [`team` + team]: teamArray,
      }));
    } else {
      console.error('No empty spots available in the team.');
    }
  };

  const handleReject = async (player) => {
    const matchRef = doc(db, 'matches', id);
    await updateDoc(matchRef, {
      pending: arrayRemove(player),
    });
    setMatchData((prevData) => ({
      ...prevData,
      pending: prevData.pending.filter((p) => p.userId !== player.userId),
    }));
  };

  useEffect(() => {
    const fetchMatchData = async () => {
      const matchRef = doc(db, 'matches', id);
      const matchSnapshot = await getDoc(matchRef);
      if (matchSnapshot.exists()) {
        const data = matchSnapshot.data();
        setMatchData({
          ...data,
          teamA: data.teamA || [null, null],
          teamB: data.teamB || [null, null],
          pending: data.pending || [],
        });
      }
      setLoading(false);
    };
    fetchMatchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!matchData) {
    return <div>Match not found</div>;
  }

  const isAdmin = currentUser.uid === matchData.Admin.userId;

  return (
    <>
      <main className="hero min-h-screen rounded-xl">
        <div className="w-[80vw] max-sm:flex-col max-sm:items-center max-sm:w-full gap-5 bg-base-100 rounded-lg flex">
          <div className="h-[70vh] max-sm:h-[50vh] max-sm:w-[80vw] w-[60vw] rounded-s-xl relative">
            <div className="w-full pt-3 justify-around bg-transparent flex gap-1">
              <div
                onClick={() => setteamA('TeamA')}
                className="group cursor-pointer"
              >
                <img
                  src={team1}
                  className="rounded-full group-hover:opacity-70 hover:cursor-pointer bg-primary h-12 w-12"
                />
                Team A
              </div>
              <div className="flex flex-col justify-center items-center">
                <Timer date={'Jul 17, 2024 17:00:00'} />
                05:00 PM
              </div>
              <div
                onClick={() => setteamA('TeamB')}
                className="group cursor-pointer"
              >
                <img
                  src={team2}
                  className="group-hover:opacity-70 rounded-full bg-base-300 h-12 w-12"
                />
                Team B
              </div>
            </div>

            <img
              className="h-[70vh] max-sm:w-full max-sm:h-[40vh] w-[60vw]"
              src={padel}
              alt=""
            />
            {teamA === 'TeamA' ? (
              <div>
                {matchData.teamA[0] && matchData.teamA[0].name && (
                  <Players
                    name={(matchData.teamA[0] && matchData.teamA[0].name) || ''}
                    x="left-20"
                    y="top-24"
                    img={team1}
                  />
                )}
                {matchData.teamA[1] && matchData.teamA[1].name && (
                  <Players
                    name={(matchData.teamA[1] && matchData.teamA[1].name) || ''}
                    x="right-20"
                    y="top-24"
                    img={team1}
                  />
                )}
              </div>
            ) : (
              <div>
                {matchData.teamB[0] && matchData.teamB[0].name && (
                  <Players
                    name={(matchData.teamB[0] && matchData.teamB[0].name) || ''}
                    x="right-20"
                    y="bottom-10"
                    img={team2}
                  />
                )}
                {matchData.teamB[1] && matchData.teamB[1].name && (
                  <Players
                    name={(matchData.teamB[1] && matchData.teamB[1].name) || ''}
                    x="left-20"
                    y="bottom-10"
                    img={team2}
                  />
                )}
              </div>
            )}
          </div>
          <DetailePlayers
            PlayersA={matchData.teamA}
            PlayersB={matchData.teamB}
            teamA={teamA}
            time={matchData.time}
            cost={matchData.price}
            location={matchData.location}
            map={matchData.map}
            pendingPlayers={matchData.pending}
            onAccept={handleAccept}
            onReject={handleReject}
            isAdmin={isAdmin}
          />
        </div>
      </main>
    </>
  );
}
