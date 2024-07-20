import React from "react";
import SideBar from "../components/SideBar";
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
import win from "../assets/win.png";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
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
    };
    fetchMatchData();
  }, []);

  return (
    <div className="h-screen w-full bg-base-100 relative flex overflow-hidden">
      <SideBar />
      <BottomNavBar />
      <div className="w-full h-full flex  justify-between ">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn m-9"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box flex flex-col items-center">
            <h3 className="font-bold flex flex-col items-center text-lg">
              {/* <p className="py-4 text-3xl">Who's the winner</p> */}
              <p className="py-4 text-3xl">Who wins the match</p>
              <span>8:00-10:00 PM</span>
            </h3>

            <img
              className="w-60"
              src={win}
              // "https://i.pinimg.com/564x/57/39/19/573919be00ab8c395668ebde2806d4c2.jpg"
              alt=""
            />

            <div className="flex gap-9 ">
              <label className="label cursor-pointer">
                <span className="px-2 label-text">Team A</span>

                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-secondary"
                  defaultChecked
                />
              </label>

              <label className="label cursor-pointer">
                <span className="px-2 label-text">Team B</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-secondary"
                  defaultChecked
                />
              </label>
            </div>
            <button className="btn mt-9 w-20 btn-secondary">send</button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {matches.length ? (
          <main className="w-full mx-1 h-full flex-row flex overflow-y-auto ">
            <div className="flex flex-col w-full my-4">
              <div className="text-center text-5xl p-2 tracking-widest text-secondary">
                my matches
              </div>
              <div className=" grid max-sm:grid-cols-1 grid-cols-3 w-[90vw] gap-10 m-auto items-center  ">
                {matches.map((e, index) => (
                  <div
                    key={index}
                    className={`w-[30vw]  max-sm:w-full h-max pb-4 shadow-xl bg-primary overflow-hidden relative rounded-md`}
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
