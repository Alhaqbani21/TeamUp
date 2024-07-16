import React, { useState } from "react";
import Basketballw from "../assets/Basketball.jpg";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import { Fade } from "react-awesome-reveal";
export default function Basketball() {
  const [teamA, setteamA] = useState("TeamA");

  const PlayersA = [
    { name: "Ali", points: 100 },
    { name: "Ahmed", points: 200 },
    { name: "Anas", points: 0 },
    { name: "Fahad", points: 10 },
    { name: "Omar", points: 50 },
  ];
  const PlayersB = [
    { name: "Fahad", points: 100 },
    { name: "Fahad", points: 0 },
    { name: "Fahad", points: 0 },
    { name: "Fahad", points: 110 },
    { name: "Fahad", points: 50 },
    { name: "Khalid", points: 120 },
  ];

  function getRankImage(points) {
    if (points >= 150) {
      return Platinum_1_Rank;
    } else if (points >= 100) {
      return Gold_1_Rank;
    } else if (points >= 50) {
      return Silver_1_Rank;
    } else {
      return Iron_1_Rank;
    }
  }
  return (
    <main className="hero min-h-screen rounded-xl  ">
      <div className="w-[70vw] max-sm: gap-9 bg-base-100 rounded-lg flex">
        <div className="h-[80vh]  w-[30vw] rounded-s-xl shadow-2xl relative ">
          <div className="w-full flex gap-1">
            <button
              style={{
                backgroundColor: teamA == "TeamA" ? "#232f3e" : "#596a7e",
              }}
              onClick={() => setteamA("TeamA")}
              className="btn text-base-100 w-[50%]"
            >
              Team A
            </button>
            <button
              style={{
                backgroundColor: teamA == "TeamA" ? "#596a7e" : "#232f3e",
              }}
              onClick={() => setteamA("TeamB")}
              className="btn text-base-100 w-[50%]"
            >
              Team B
            </button>
          </div>

          <img className="h-[80vh] w-[30vw]" src={Basketballw} alt="" />
          {teamA == "TeamA" ? (
            <>
              {" "}
              <Players name="Ali" x="left-20" y="top-9" img={team1} />
              <Players name="Ahmed" x="right-20" y="top-9" img={team1} />
              <Players name="Omar" x="left-20" y="bottom-40" img={team1} />
              <Players name="Anas" x="left-10" y="top-40" img={team1} />
              <Players name="Fahad" x="right-10" y="top-40" img={team1} />
            </>
          ) : (
            <>
              {" "}
              <Players name="Khalid" x="right-20" y="bottom-9" img={team2} />
              <Players name="Fahad" x="left-20" y="bottom-9" img={team2} />
              <Players name="Fahad" x="right-20" y="top-40" img={team2} />
              <Players name="Fahad" x="right-10" y="bottom-40" img={team2} />
              <Players name="Fahad" x="left-10" y="bottom-40" img={team2} />
            </>
          )}
        </div>

        <div className=" w-full h-max text-xl text-black bg-base-100 px-7 ">
          <div
            className="flex justify-between
        w-full p-3  "
          >
            {teamA == "TeamA" ? (
              <div className="flex  items-center  gap-6">
                <div className="text-xl  font-bold text-secondary m-2 shadow-lg border-2 rounded-full px-3 h-10">
                  A
                </div>
                <div className=" flex gap-10  ">
                  {PlayersA.map((player) => (
                    <Fade duration={2000} triggerOnce={true} direction="right">
                      <div>
                        {" "}
                        <p className="text-lg font-medium ">{player.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-base text-secondary ">
                            {player.points} points
                          </p>
                          <img
                            className="w-7"
                            src={getRankImage(player.points)}
                            alt="Rank"
                          />
                        </div>{" "}
                      </div>
                    </Fade>
                  ))}
                </div>{" "}
              </div>
            ) : (
              <div className="flex  items-center  gap-6">
                <div className="text-xl  font-bold text-secondary m-2 shadow-lg border-2 rounded-full px-3 h-10">
                  B
                </div>
                <div className=" flex gap-10  ">
                  {PlayersB.map((player) => (
                    <Fade triggerOnce={true} direction="right">
                      <div>
                        {" "}
                        <p className="text-lg font-medium ">{player.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-base text-secondary ">
                            {player.points} points
                          </p>
                          <img
                            className="w-7"
                            src={getRankImage(player.points)}
                            alt="Rank"
                          />
                        </div>{" "}
                      </div>{" "}
                    </Fade>
                  ))}
                </div>{" "}
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-9 items-center px-3">
            <h1>Time</h1>
            <div className=" text-secondary text-lg">
              18 Jul, 8:00PM-11:30PM
              <br />
            </div>
          </div>
          <div className="flex gap-3 mt-7 items-center px-3">
            <h1>Cost</h1>
            <div className=" text-secondary text-lg">150 SAR</div>
          </div>
          <div
            className="flex justify-between mt-4 rounded-t-md
   w-full px-3"
          >
            <span className="">Basketball Ground</span>
          </div>
          <iframe
            className="justify-between rounded-t-md
        w-full p-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115924.67751812687!2d46.81571805664062!3d24.773317900000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd86c4a30495%3A0xa15081d4f13a3998!2z2YXZhNi52Kgg2YPYsdipINin2YTYs9mE2KkgLSBCYXNrZXRiYWxsIEdyb3VuZA!5e0!3m2!1sar!2ssa!4v1721076770611!5m2!1sar!2ssa"
            width="500"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
