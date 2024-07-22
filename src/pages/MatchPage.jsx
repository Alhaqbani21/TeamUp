import React, { useEffect, useState } from "react";
import padel from "../assets/padel.jpg";
import volleyball from "../assets/Volly.jpg";
import basketball from "../assets/Basketball.jpg";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Timer from "../components/Timer";
import DetailePlayers from "../components/DetailePlayers";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import img from "../assets/vollyballStadium.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  getDocs,
  collection,
} from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import SideBar from "../components/SideBar";
import BottomNavBar from "../components/BottomNavBar";

export default function MatchPage() {
  const [teamA, setteamA] = useState("TeamA");
  const { id } = useParams();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchMatchData = async () => {
      const matchRef = doc(db, "matches", id);
      const matchSnapshot = await getDoc(matchRef);

      if (matchSnapshot.exists()) {
        const data = matchSnapshot.data();

        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersPointsMap = usersSnapshot.docs.reduce((acc, doc) => {
          const userData = doc.data();
          acc[doc.id] = userData.points;
          return acc;
        }, {});

        const mapPoints = (team) =>
          (data[team] || []).map((player) => ({
            ...player,
            point: usersPointsMap[player?.userId] ?? 0,
          }));

        setMatchData({
          ...data,
          teamA: mapPoints("teamA") || [null, null],
          teamB: mapPoints("teamB") || [null, null],
          pending: (data.pending || []).map((player) => ({
            ...player,
            point: usersPointsMap[player.userId] ?? 0,
          })),
        });
      }
      setLoading(false);
    };

    fetchMatchData();
  }, [id]);

  const handleAccept = async (player) => {
    const matchRef = doc(db, "matches", id);
    const matchSnapshot = await getDoc(matchRef);
    const matchData = matchSnapshot.data();

    const team = player.team;
    const teamArray = matchData[`team${team}`];

    // Find the first empty spot in the team array
    const emptyIndex = teamArray.findIndex((p) => !p);
    if (emptyIndex !== -1) {
      teamArray[emptyIndex] = {
        name: player.name,
        userId: player.userId,
      };

      // Find the player in the pending array to ensure exact match for arrayRemove
      const playerToRemove = matchData.pending.find(
        (p) => p.userId === player.userId
      );

      if (playerToRemove) {
        await updateDoc(matchRef, {
          pending: arrayRemove(playerToRemove),
          [`team${team}`]: teamArray,
        });

        // Update the local state to reflect the changes
        setMatchData((prevData) => {
          const newPending = prevData.pending.filter(
            (p) => p.userId !== player.userId
          );
          const newTeam = [...prevData[`team${team}`]];
          newTeam[emptyIndex] = {
            ...teamArray[emptyIndex],
            point:
              prevData.pending.find((p) => p.userId === player.userId)?.point ||
              0,
          };
          return {
            ...prevData,
            pending: newPending,
            [`team${team}`]: newTeam,
          };
        });
        toast.success("Player has been accepted");
      } else {
        console.error("Player not found in pending array.");
      }
    } else {
      console.error("No empty spots available in the team.");
    }
  };

  const handleReject = async (player) => {
    toast.warn(
      ({ closeToast }) => (
        <div className="flex gap-2">
          <p>Are you sure?</p>
          <button
            className="border-2 border-[#0c0c0c] w-[3em] rounded-full"
            onClick={async () => {
              const matchRef = doc(db, "matches", id);
              const matchSnapshot = await getDoc(matchRef);
              const matchData = matchSnapshot.data();

              // Find the player in the pending array to ensure exact match for arrayRemove
              const playerToRemove = matchData.pending.find(
                (p) => p.userId === player.userId
              );

              if (playerToRemove) {
                await updateDoc(matchRef, {
                  pending: arrayRemove(playerToRemove),
                });

                setMatchData((prevData) => ({
                  ...prevData,
                  pending: prevData.pending.filter(
                    (p) => p.userId !== player.userId
                  ),
                }));
                toast.success("Player has been rejected");
              } else {
                toast.error("Player not found in the pending list");
              }
              closeToast();
            }}
          >
            Yes
          </button>
          <button
            className="border-2 border-[#0c0c0c] w-[3em] rounded-full"
            onClick={() => {
              toast.warn("Rejection cancelled");
              closeToast();
            }}
          >
            No
          </button>
        </div>
      ),
      { autoClose: false }
    );
  };

  const handeleject = async (userId, team, name) => {
    console.log(userId);
    const matchRef = doc(db, "matches", id);
    const matchSnapshot = await getDoc(matchRef);
    const matchData = matchSnapshot.data();
    let rejectArray = matchData.rejected || [];
    rejectArray.push({ name, userId });

    let teamArray =
      team === "teamA" ? [...matchData.teamA] : [...matchData.teamB];
    const index = teamArray.findIndex((e) => e !== null && e.userId === userId);
    console.log(teamArray);
    if (index !== -1) {
      teamArray[index] = null; // Replace the player with null to indicate an empty spot
      await updateDoc(matchRef, {
        rejected: rejectArray,
        [team]: teamArray,
      });

      // Update local state to reflect changes
      setMatchData((prevData) => ({
        ...prevData,
        [team]: teamArray,
        rejected: rejectArray,
      }));
      // if (team === "teamA") {
      //   setteamA(teamArray);
      // } else {
      //   setteamA(teamArray);
      // }
    }
  };

  const today = new Date().getDate();
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthArray[new Date().getMonth()];
  const year = new Date().getFullYear();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center w-full m-auto">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!matchData) {
    return <div>Match not found</div>;
  }

  const isAdmin = currentUser.uid === matchData.Admin.userId;
  const isVolleyball = matchData.category === "Volleyball";
  const isBasketball = matchData.category === "Basketball";

  return (
    <>
      <div className="h-screen w-full bg-base-100 relative flex">
        <SideBar />
        <ToastContainer autoClose={2000} />

        <BottomNavBar />

        <div className="w-full h-full flex justify-between">
          <main className="hero min-h-screen rounded-xl">
            <div
              className="w-[80vw] max-sm:flex-col max-sm:items-center max-sm:w-full gap-5 bg-base-100
             rounded-lg flex"
            >
              <div className="h-[70vh] max-sm:h-[50vh] max-sm:w-[80vw] w-[60vw] rounded-s-xl relative">
                <div className="w-full pt-3 justify-around bg-transparent flex gap-1">
                  <div
                    onClick={() => setteamA("TeamA")}
                    className="group cursor-pointer"
                  >
                    <img
                      src={team1}
                      className="rounded-full group-hover:opacity-70 hover:cursor-pointer bg-primary h-12 w-12"
                    />
                    Team A
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Timer
                      date={`${month} ${today}, ${year} ${
                        Number(
                          matchData.time.substring(0, 2).split(":").join("")
                        ) + 12
                      }:00:00`}
                    />
                    {matchData.time.substring(0, 5)} PM
                    <br />
                  </div>
                  <div
                    onClick={() => setteamA("TeamB")}
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
                  className="h-[70vh] rounded-3xl max-sm:w-full max-sm:h-[40vh] w-[60vw]"
                  src={
                    isVolleyball
                      ? volleyball
                      : isBasketball
                      ? basketball
                      : padel
                  }
                  alt=""
                />
                {isVolleyball ? (
                  teamA === "TeamA" ? (
                    <>
                      {matchData.teamA.map(
                        (player, index) =>
                          player &&
                          player.name && (
                            <Players
                              AdminId={matchData.Admin.userId}
                              isAdmin={player.userId == matchData.Admin.userId}
                              matchId={id}
                              userId={player.userId}
                              key={index}
                              name={player.name}
                              onEject={() =>
                                handeleject(player.userId, "teamA", player.name)
                              }
                              x={
                                [
                                  "left-0",
                                  "right-10",
                                  "left-48",
                                  "left-28",
                                  "left-10",
                                  "right-0",
                                ][index]
                              }
                              y={
                                [
                                  "top-14",
                                  "top-20",
                                  "top-40",
                                  "top-14",
                                  "top-40",
                                  "top-40",
                                ][index]
                              }
                              img={team1}
                            />
                          )
                      )}
                    </>
                  ) : (
                    <>
                      {matchData.teamB.map(
                        (player, index) =>
                          player &&
                          player.name && (
                            <Players
                              AdminId={matchData.Admin.userId}
                              isAdmin={player.userId == matchData.Admin.userId}
                              matchId={id}
                              userId={player.userId}
                              key={index}
                              name={player.name}
                              onEject={() =>
                                handeleject(player.userId, "teamB", player.name)
                              }
                              x={
                                [
                                  "right-10",
                                  "left-0",
                                  "right-28",
                                  "right-40",
                                  "right-0",
                                  "left-10",
                                ][index]
                              }
                              y={
                                [
                                  "bottom-10",
                                  "bottom-0",
                                  "bottom-0",
                                  "bottom-10",
                                  "bottom-14",
                                  "bottom-14",
                                ][index]
                              }
                              img={team2}
                            />
                          )
                      )}
                    </>
                  )
                ) : isBasketball ? (
                  teamA === "TeamA" ? (
                    <>
                      {matchData.teamA.map(
                        (player, index) =>
                          player &&
                          player.name && (
                            <Players
                              AdminId={matchData.Admin.userId}
                              isAdmin={player.userId == matchData.Admin.userId}
                              matchId={id}
                              userId={player.userId}
                              key={index}
                              name={player.name}
                              x={
                                ["left-20", "right-20", "left-32", "left-10"][
                                  index
                                ]
                              }
                              y={
                                ["top-14", "top-14", "bottom-40", "top-40"][
                                  index
                                ]
                              }
                              img={team1}
                              onEject={() =>
                                handeleject(player.userId, "teamA", player.name)
                              }
                            />
                          )
                      )}
                    </>
                  ) : (
                    <>
                      {matchData.teamB.map(
                        (player, index) =>
                          player &&
                          player.name && (
                            <Players
                              AdminId={matchData.Admin.userId}
                              isAdmin={player.userId == matchData.Admin.userId}
                              matchId={id}
                              userId={player.userId}
                              key={index}
                              name={player.name}
                              onEject={() =>
                                handeleject(player.userId, "teamB", player.name)
                              }
                              x={
                                ["right-10", "left-10", "right-28", "left-20"][
                                  index
                                ]
                              }
                              y={
                                [
                                  "bottom-0",
                                  "bottom-0",
                                  "bottom-1",
                                  "bottom-20",
                                ][index]
                              }
                              img={team2}
                            />
                          )
                      )}
                    </>
                  )
                ) : teamA === "TeamA" ? (
                  <div>
                    {matchData.teamA[0] && matchData.teamA[0].name && (
                      <Players
                        AdminId={matchData.Admin.userId}
                        isAdmin={
                          matchData.teamA[0].userId == matchData.Admin.userId
                        }
                        matchId={id}
                        userId={matchData.teamA[0].userId}
                        name={matchData.teamA[0].name || ""}
                        x="left-20"
                        y="top-24"
                        img={team1}
                        onEject={() =>
                          handeleject(
                            matchData.teamA[0].userId,
                            "teamA",
                            matchData.teamA[0].name
                          )
                        }
                      />
                    )}
                    {matchData.teamA[1] && matchData.teamA[1].name && (
                      <Players
                        AdminId={matchData.Admin.userId}
                        isAdmin={
                          matchData.teamA[1].userId == matchData.Admin.userId
                        }
                        matchId={id}
                        userId={matchData.teamA[1].userId}
                        name={matchData.teamA[1].name || ""}
                        x="right-20"
                        y="top-24"
                        img={team1}
                        onEject={() =>
                          handeleject(
                            matchData.teamA[1].userId,
                            "teamA",
                            matchData.teamA[1].name
                          )
                        }
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    {matchData.teamB[0] && matchData.teamB[0].name && (
                      <Players
                        AdminId={matchData.Admin.userId}
                        isAdmin={
                          matchData.teamB[0].userId == matchData.Admin.userId
                        }
                        matchId={id}
                        userId={matchData.teamB[0].userId}
                        name={matchData.teamB[0].name || ""}
                        x="right-20"
                        y="bottom-10"
                        img={team2}
                        onEject={() =>
                          handeleject(
                            matchData.teamB[0].userId,
                            "teamB",
                            matchData.teamB[0].name
                          )
                        }
                      />
                    )}
                    {matchData.teamB[1] && matchData.teamB[1].name && (
                      <Players
                        AdminId={matchData.Admin.userId}
                        isAdmin={
                          matchData.teamB[1].userId == matchData.Admin.userId
                        }
                        matchId={id}
                        userId={matchData.teamB[1].userId}
                        name={matchData.teamB[1].name || ""}
                        x="left-20"
                        y="bottom-10"
                        img={team2}
                        onEject={() =>
                          handeleject(
                            matchData.teamB[1].userId,
                            "teamB",
                            matchData.teamB[1].name
                          )
                        }
                      />
                    )}
                  </div>
                )}
              </div>

              <DetailePlayers
                PlayersA={matchData.teamA}
                PlayersB={matchData.teamB}
                name={matchData}
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
        </div>
      </div>
    </>
  );
}
