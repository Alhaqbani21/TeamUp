import React from "react";
import SideBar from "../components/SideBar";
import BottomNavBar from "../components/BottomNavBar";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import VollyballImage from "../assets/VollyballImage.png";
import basketBallImage from "../assets/basketBallImage.png";
import NoMatch from "../assets/Nomatch.png";
import win from "../assets/win.png";
import { FaUserTie } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function Reservation() {
  const backgroundImagePadel =
    "https://champs-sportsclub.com/wp-content/uploads/2024/05/Playing-Tennis-padel-1.jpg";
  const [matches, setMatches] = React.useState([]);
  const [timeModal, setTimeModal] = React.useState("");
  const [userModalA, setUserModalA] = React.useState([]);
  const [userModalB, setUserModalB] = React.useState([]);
  const [radio, setRadio] = React.useState("teamA");
  const [idMatch, setIdMatch] = React.useState("");

  const [hidden, sethidden] = React.useState({ teamA: false, teamB: false });
  const user = auth.currentUser;
  const navigate = useNavigate();
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
  };
  React.useEffect(() => {
    fetchMatchData();
  }, []);
  const handelAddPoints = () => {
    const fetchPointes = async () => {
      const matchRef = doc(db, "matches", idMatch);

      const matchSnapshot = await getDoc(matchRef);
      const matchdata = matchSnapshot.data();

      if (radio == "teamA") {
        matchSnapshot.data().teamA.map(async (e) => {
          if (e != null) {
            const matchId = doc(db, "users", e.userId);
            const userSnapshot = await getDoc(matchId);
            let userData = userSnapshot.data();

            await updateDoc(matchId, {
              points: userData.points + 20,
              isNotified: true,
              matchesPlayed: userData.matchesPlayed + 1,
            });
          }
        });
      } else {
        matchSnapshot.data().teamB.map(async (e) => {
          if (e != null) {
            const matchId = doc(db, "users", e.userId);
            const userSnapshot = await getDoc(matchId);
            let userData = userSnapshot.data();

            await updateDoc(matchId, {
              points: userData.points + 20,
              isNotified: true,
              matchesPlayed: userData.matchesPlayed + 1,
            });
          }
        });
      }
      const matchStadium = doc(db, "stadium", matchdata.stadiumID);
      const stadiumSnapshot = await getDoc(matchStadium);
      const index = stadiumSnapshot
        .data()
        .timeSlot.findIndex((e) => e.time == matchdata.time);
      let arrayTime = [];
      arrayTime = stadiumSnapshot.data().timeSlot;
      arrayTime[index] = { time: arrayTime[index].time, isBooked: false };
      await updateDoc(matchStadium, { timeSlot: arrayTime });
      await deleteDoc(matchRef);
      document.getElementById("my_modal_2").close();
      fetchMatchData();
    };
    fetchPointes();
  };
  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <BottomNavBar />
      <div className="w-full h-full flex  justify-between ">
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        {matches.length ? (
          <main className="w-full mx-1 h-full flex-row flex overflow-y-auto ">
            <div className="flex flex-col w-full my-4">
              <div className="text-center text-5xl p-2 tracking-widest text-secondary">
                My matches
              </div>
              <div className="relative grid max-sm:grid-cols-1 grid-cols-3 w-[90vw] gap-10 m-auto items-center  ">
                {matches.map((e, index) => (
                  <div
                    key={index}
                    className={`w-[30vw] overflow-hidden  max-sm:w-full h-max pb-4  bg-primary  overflow-hiddn relative rounded-md`}
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
                    {Number(e.time.substring(0, 2).split(":").join("")) <=
                      Number(new Date().getHours()) - 12 && (
                      // 1 > Number(new Date().getHours()) - 12 && (
                      <button
                        disabled={e.Admin.userId != user.uid && true}
                        onClick={() => {
                          setTimeModal(e.time);
                          setUserModalA(e.teamA.filter((i) => i != null));
                          setUserModalB(e.teamB.filter((i) => i != null));
                          setIdMatch(e.id);
                          document.getElementById("my_modal_2").showModal();
                        }}
                        className=" text-red-600 absolute top-20 left-40 z-10  text-3xl "
                      >
                        Finished
                      </button>
                    )}
                    <div
                      className="absolute inset-0 bg-black opacity-50 filter blur-lg"
                      style={{
                        opacity:
                          Number(e.time.substring(0, 2).split(":").join("")) <=
                            Number(new Date().getHours()) - 12 && "0.7",
                      }}
                    ></div>

                    <div
                      style={{
                        opacity:
                          Number(e.time.substring(0, 2).split(":").join("")) <=
                            Number(new Date().getHours()) - 12 && "0.4",
                      }}
                      className="relative p-4 flex flex-col  justify-center"
                    >
                      <div className="flex justify-between items-center  py-2">
                        <div className="flex flex-col w-full justify-center">
                          <div className=" flex justify-between w-full font-bold text-white">
                            <h1 className="text-xl font-bold text-white">
                              {e.stadiumName}
                            </h1>
                            <div>
                              {e.Admin.userId == user.uid && (
                                <span className="badge outline-none border-none bg-orange-300 p-3">
                                  {e.pending.length == 0 ? (
                                    <>
                                      <FaUserTie />
                                    </>
                                  ) : (
                                    <>{e.pending.length} Request</>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-gray-300 py-2 text-sm">
                            {`${e.time} PM`}
                          </div>
                        </div>
                      </div>
                      <button
                        disabled={
                          Number(e.time.substring(0, 2).split(":").join("")) <=
                            Number(new Date().getHours()) - 12 && true
                        }
                        onClick={() => {
                          navigate(`./${e.id}`);
                        }}
                        className="w-max p-3 
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
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box flex flex-col items-center ">
          <h3 className="font-bold flex flex-col items-center text-lg">
            {/* <p className="py-4 text-3xl">Who's the winner</p> */}
            <p className="py-4 text-3xl">Who wins the match</p>
            <span>{timeModal} PM</span>
          </h3>

          <img
            className="w-60"
            src={win}
            // "https://i.pinimg.com/564x/57/39/19/573919be00ab8c395668ebde2806d4c2.jpg"
            alt=""
          />

          <div className="flex gap-9 ">
            <label className="label cursor-pointer">
              <div className="flex items-center justify-center flex-col relative ">
                <span className="px-2 font-bold label-text">
                  Your team{" "}
                  <button
                    onClick={() =>
                      sethidden({ ...hidden, teamA: !hidden.teamA })
                    }
                  >
                    <IoIosArrowDown />
                  </button>
                </span>

                <ul
                  style={{ display: hidden.teamA == false ? "none" : "" }}
                  className=" 
                  list-disc list-inside absolute  text-primary  
                  px-1 rounded-md w-max bg-base-100 
                   top-7  shadow-lg 
                   border border-base-300 "
                >
                  {userModalA.map((e, i) => (
                    <li key={i}>
                      <small>{e.name}</small>
                    </li>
                  ))}
                </ul>
              </div>
              <input
                onChange={() => {
                  setRadio("teamA");
                }}
                type="radio"
                name="radio-10"
                className="radio checked:bg-secondary"
                defaultChecked
              />
            </label>
            <label className="label relative cursor-pointer">
              <div className="flex justify-center items-center flex-col ">
                <span className="px-2 font-bold  label-text">
                  Other team
                  <button
                    onClick={() =>
                      sethidden({ ...hidden, teamB: !hidden.teamB })
                    }
                  >
                    <IoIosArrowDown />
                  </button>
                </span>
                <ul
                  style={{ display: hidden.teamB == false ? "none" : "" }}
                  className="   list-disc list-inside absolute  text-primary  
                  px-1 rounded-md w-max bg-base-100 
                   top-7  shadow-lg 
                   border border-base-300 "
                >
                  {userModalB.map((e, i) => (
                    <li key={i}>
                      <small>{e.name}</small>
                    </li>
                  ))}
                </ul>
              </div>
              <input
                onChange={() => {
                  setRadio("teamB");
                }}
                type="radio"
                name="radio-10"
                className="radio checked:bg-secondary"
              />
            </label>
          </div>
          <button
            onClick={() => {
              handelAddPoints();
            }}
            className="btn mt-9 w-20 btn-secondary"
          >
            send
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
