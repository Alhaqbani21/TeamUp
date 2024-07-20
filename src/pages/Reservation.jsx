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
        <main className="w-full mx-9 h-full flex-row flex relative overflow-y-auto overflow-x-hidden ">
          <div className="flex flex-col w-full my-4">
            <div className="p-8  grid grid-cols-3 max-sm:grid-cols-1 items-center w-full ">
              {matches.map((e,index) => (
                <div key={index}
                  className={` h-max pb-4 m-4 shadow-xl  text-primary overflow-hidden relative rounded-md`}
                  // style={{

                  // }}
                >
                  {/* <div className="absolute inset-0 bg-black opacity-50 filter blur-lg"></div> */}
                  <div className="relative p-4 flex flex-col  justify-center">
                    <div className="flex flex-col justify-between items-center  py-2">
                      <div className="flex  justify-between w-full">
                        <h1 className="text-xl font-bold text-primary">
                          {e.stadiumName}
                        </h1>
                      </div>
                      <div className="flex w-full justify-between">
                        <div className="justify-around flex flex-col py-2 text-sm">
                          {`${e.time} PM`}
                          <div
                            className={`flex justify-between items-center  mt-4 ${
                              e.teamA.length + e.teamB.length ===
                              [...e.teamA, ...e.teamB].filter((e) => e !== null)
                                .length
                                ? `text-gray-400`
                                : "text-secondary"
                            } py-2 px-4 rounded-lg`}
                          >
                            <span className="font-bold ">
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
                                  <span className=" mr-1">{`${
                                    [...e.teamA, ...e.teamB].filter(
                                      (e) => e !== null
                                    ).length
                                  }/${e.teamA.length + e.teamB.length}`}</span>
                                  {" players joined"}
                                </>
                              )}
                            </span>
                          </div>
                          <Link
                            to={`./${e.id}`}
                            className=" text-white btn-secondary  btn  font-bold"
                          >
                            {" "}
                            details
                            {/* {price / totalPlayers} */}
                          </Link>
                        </div>
                        <img
                          className="w-40 h-40 "
                          src={
                            e.category == "Padel"
                              ? backgroundImagePadel
                              : e.category == "Basketball"
                              ? basketBallImage
                              : VollyballImage
                          }
                          alt=""
                        />
                        <svg
                          className="absolute inset-x-0 bottom-0 text-base-100"
                          viewBox="0 0 1160 163"
                        >
                          <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44  76 120 196 141C316 162 416 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
