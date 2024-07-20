import React from "react";
import SideBar from "../components/SideBar";
// import AA from "../components/AA";
// import Side from '../components/Side';
import BottomNavBar from "../components/BottomNavBar";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import VollyballImage from "../assets/VollyballImage.png";
import basketBallImage from "../assets/basketBallImage.png";
import padelImage from "../assets/padel_Image.png";
import basketBall from "../assets/basket_Ball.png";
import VollyBall from "../assets/VollyBall.png";
import NoMatch from "../assets/Nomatch.png";

export default function Reservation() {
  const backgroundImagePadel =
    "https://champs-sportsclub.com/wp-content/uploads/2024/05/Playing-Tennis-padel-1.jpg";
  const [matches, setMatches] = React.useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchMatchData = async () => {
      const matchRef = collection(db, "matches");

      const matchSnapshot = await getDocs(matchRef);

      const data = matchSnapshot.docs.map((e) => ({
        ...e.data(),
        id: e.id,
      }));

      const array = [];
      data.map((match) => {
        const filterTeamA = match.teamA.filter((e) => e !== null);
        const filterTeamB = match.teamB.filter((e) => e !== null);
        if (match.Admin.userId == user.uid) {
          array.push(match);
        } else if (filterTeamA.find((e) => e.userId == user.uid)) {
          array.push(match);
        } else if (filterTeamB.find((e) => e.userId == user.uid)) {
          array.push(match);
        }
      });
      setMatches(array);
      // console.log(matches);
      // setMatchData({
      //   ...data,
      //   teamA: data.teamA || [null, null],
      //   teamB: data.teamB || [null, null],
      //   pending: data.pending || [],
      // });
      // }
      // setLoading(false);
    };
    fetchMatchData();
  }, []);

  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <BottomNavBar />
      <div className="w-full h-full flex  justify-between ">
        {matches.length ? (
          <main className="w-full mx-9 h-full flex-row flex relative overflow-y-auto overflow-x-hidden ">
            <div className="flex flex-col w-full my-4">
              <div className="p-8  grid grid-cols-3 items-center w-full ">
                {matches.map((e) => (
                  <div
                    className={`w-96 h-max pb-4 mb-4 shadow-xl bg-primary overflow-hidden relative rounded-md`}
                    style={{
                      backgroundImage: `url(${
                        e.category === "Padel"
                          ? backgroundImagePadel
                          : e.category === "Basketball"
                          ? basketBallImage
                          : VollyballImage
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-50 filter blur-lg"></div>
                    <div className="relative p-4 flex flex-col  justify-center">
                      <div className="flex justify-between items-center  py-2">
                        <div className="flex flex-col justify-center">
                          <h1 className="text-xl font-bold text-white">
                            {e.stadiumName}
                          </h1>
                          <div className="text-gray-300 py-2 text-sm">
                            {`${e.time} PM`}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          navigate(`./${e.id}`);
                        }}
                        className="w-max p-3 cursor-pointer
                         text-orange-300 mr-1 font-bold"
                      >
                        details
                      </button>
                      <div
                        className={`flex justify-between items-center mt-4 ${
                          e.teamA.length + e.teamB.length ===
                          [...e.teamA, ...e.teamB].filter((e) => e !== null)
                            .length
                            ? `bg-gray-400`
                            : "bg-secondary"
                        } py-2 px-4 rounded-lg`}
                      >
                        <span className="font-medium text-white">
                          {e.teamA.length + e.teamB.length ===
                          [...e.teamA, ...e.teamB].filter((e) => e !== null)
                            .length ? (
                            <>
                              {`${
                                [...e.teamA, ...e.teamB].filter(
                                  (e) => e !== null
                                ).length
                              }
                           / ${e.teamA.length + e.teamB.length} completed`}
                            </>
                          ) : (
                            <>
                              <span className="text-orange-300 mr-1">{`${
                                [...e.teamA, ...e.teamB].filter(
                                  (e) => e !== null
                                ).length
                              }/${e.teamA.length + e.teamB.length}`}</span>
                              {" players joined"}
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center w-full">
            <img className="w-60" src={NoMatch} alt="" />
            <br />
            <span className="text-lg font-bold">There is no match booked </span>
          </div>
        )}
      </div>
    </div>
  );
}
