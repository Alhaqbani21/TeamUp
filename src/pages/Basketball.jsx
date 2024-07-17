import React, { useRef, useState } from "react";
import Basketballw from "../assets/Basketball.jpg";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Timer from "../components/Timer";
import DetailePlayers from "../components/DetailePlayers";
export default function Basketball() {
  const [teamA, setteamA] = useState("TeamA");

  const PlayersA = [
    { name: "Ali", points: 100 },
    { name: "Ahmed", points: 200 },
    { name: "Anas", points: 0 },
    { name: "You", points: 10 },
    { name: "Omar", points: 50 },
  ];
  const PlayersB = [
    { name: "Fahad", points: 100 },
    { name: "Fahad", points: 0 },
    { name: "Fahad", points: 110 },
    { name: "Fahad", points: 50 },
    { name: "Khalid", points: 120 },
  ];

  return (
    <main className="hero min-h-screen rounded-xl  ">
      <div className="w-[75vw]  max-sm:flex-col max-sm:items-center  max-sm:w-full gap-9 bg-base-100 rounded-lg flex">
        <div className="h-[70vh]  max-sm:h-[50vh] max-sm:w-[80vw] rounded-s-xl relative ">
          <div className="w-full pt-3 justify-around bg-transnt   flex gap-1">
            <div
              className="group cursor-pointer"
              onClick={() => setteamA("TeamA")}
            >
              <img
                src={team1}
                className=" rounded-full  bg-primary h-12 w-12  group-hover:opacity-75"
              />
              Team A
            </div>
            <div className="flex flex-col justify-center items-center">
              <Timer date="Jul 16, 2024 19:00:00" />
              07:00 PM
            </div>
            <div
              className="group cursor-pointer"
              onClick={() => setteamA("TeamB")}
            >
              {" "}
              <img
                src={team2}
                className=" group-hover:opacity-75 rounded-full  bg-base-300 h-12 w-12 "
              />
              Team B
            </div>
          </div>
          <img
            className="h-[70vh] max-sm:w-full max-sm:h-[50vh] w-[100vw]  hover:cursor-pointer"
            src={Basketballw}
            alt=""
          />
          {teamA == "TeamA" ? (
            <>
              {" "}
              <Players name="Ali" x="left-20" y="top-14" img={team1} />
              <Players name="Ahmed" x="right-20" y="top-14" img={team1} />
              <Players name="Omar" x="left-32" y="bottom-40" img={team1} />
              <Players name="Anas" x="left-10" y="top-40" img={team1} />
              <Players name="You" x="right-10" y="top-40" img={team1} />
            </>
          ) : (
            <>
              {" "}
              <Players name="Khalid" x="right-10" y="bottom-0" img={team2} />
              <Players name="Fahad" x="left-10" y="bottom-0" img={team2} />
              <Players name="Fahad" x="right-28" y="-bottom-1" img={team2} />
              <Players name="Fahad" x="right-20" y="bottom-20" img={team2} />
              <Players name="Fahad" x="left-20" y="bottom-20" img={team2} />
            </>
          )}
        </div>

        <div className=" max-sm:mt-8 w-full h-max text-xl text-black bg-base-100 px-7 ">
          {/* <Timer date="Jul 16, 2024 19:00:00" /> */}

          <div
            className="flex justify-between
        w-full p-3 max-sm:mt-5 "
          >
            {teamA == "TeamA" ? (
              <DetailePlayers team="A" PlayersA={PlayersA} />
            ) : (
              <DetailePlayers team="B" PlayersA={PlayersB} />
            )}
          </div>
          <div className="flex gap-3  max-sm:mt-2  mt-9 items-center px-3">
            <h1>Time</h1>
            <div className=" text-secondary text-lg">
              16 Jul, 7:00PM-10:30PM
              <br />
            </div>
          </div>
          <div className="flex  max-sm:mt-0 gap-3 mt-7 items-center px-3">
            <h1>Cost</h1>
            <div className=" text-secondary text-lg">100 SAR</div>
          </div>
          <div
            className="flex  max-sm:mt-0 justify-between mt-4 rounded-t-md
   w-full px-3"
          >
            <span className="">Basketball Ground</span>
          </div>
          <iframe
            className="justify-between max-sm:w-full rounded-t-md
         p-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115924.67751812687!2d46.81571805664062!3d24.773317900000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd86c4a30495%3A0xa15081d4f13a3998!2z2YXZhNi52Kgg2YPYsdipINin2YTYs9mE2KkgLSBCYXNrZXRiYWxsIEdyb3VuZA!5e0!3m2!1sar!2ssa!4v1721076770611!5m2!1sar!2ssa"
            width="600"
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
