import React, { useState } from "react";
import Basketballw from "../assets/Volly.jpg";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import { Fade } from "react-awesome-reveal";
import Timer from "../components/Timer";
import DetailePlayers from "../components/DetailePlayers";
export default function Volly() {
  const [teamA, setteamA] = useState("TeamA");

  const PlayersA = [
    { name: "Ali", points: 100 },
    { name: "Ahmed", points: 200 },
    { name: "Anas", points: 0 },
    { name: "Fahad", points: 10 },
    { name: "Omar", points: 50 },
    { name: "Yasser", points: 0 },
  ];
  const PlayersB = [
    { name: "You", points: 80 },
    { name: "Talal", points: 0 },
    { name: "Sultan", points: 0 },
    { name: "Fahad", points: 110 },
    { name: "Turki", points: 90 },
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
    <main className="hero min-h-screen rounded-xl ">
      <div className="w-[80vw] max-sm:w-[90vw] max-sm:flex-col  max-sm:justify-center max-sm:items-center  gap-9 bg-base-100 rounded-lg flex">
        <div className="h-[70vh]  max-sm:h-[50vh] max-sm:w-[80vw] w-[60vw] rounded-s-xl  relative ">
          <div className="w-full pt-3 justify-around bg-transparent   flex gap-1">
            <div
              onClick={() => setteamA("TeamA")}
              className="group cursor-pointer"
            >
              <img
                src={team1}
                className="  group-hover:opacity-75 rounded-full  bg-primary h-12 w-12 "
              />
              Team A
            </div>
            <div className="flex flex-col justify-center items-center">
              <Timer date={"Jul 18, 2024 20:00:00"} />
              08:00 PM
            </div>
            <div
              onClick={() => setteamA("TeamB")}
              className="group cursor-pointer"
            >
              {" "}
              <img
                src={team2}
                className=" rounded-full  group-hover:opacity-75
                 bg-base-300 h-12 w-12 "
              />
              Team B
            </div>
          </div>
          <img
            className="h-[70vh] max-sm:w-full max-sm:h-[50vh] w-[60vw]"
            src={Basketballw}
            alt=""
          />
          {teamA == "TeamA" ? (
            <>
              {" "}
              <Players name="Ali" x="left-0" y="top-14" img={team1} />
              <Players name="Ahmed" x="right-10" y="top-20" img={team1} />
              <Players name="Omar" x="left-48" y="top-40" img={team1} />
              <Players name="Anas" x="left-28" y="top-14" img={team1} />
              <Players name="Fahad" x="left-10" y="top-40" img={team1} />
              <Players name="Yasser" x="right-0" y="top-40" img={team1} />
            </>
          ) : (
            <>
              {" "}
              <Players name="You" x="right-10" y="bottom-10" img={team2} />
              <Players name="Talal" x="left-0" y="bottom-0" img={team2} />
              <Players name="Sultan" x="right-28" y="bottom-0" img={team2} />
              <Players name="Turki" x="right-40" y="bottom-10" img={team2} />
              <Players name="Fahad" x="right-0" y="bottom-14" img={team2} />
              <Players name="Khalid" x="left-10" y="bottom-14" img={team2} />
            </>
          )}
        </div>

        <div className="max-sm:p-0 w-full max-sm:mt-8 h-max text-xl text-black bg-base-100 px-7 ">
          {/* <Timer date="Jul 18, 2024 10:00:00" /> */}

          <div
            className="flex justify-between
        w-full p-3  "
          >
            {teamA == "TeamA" ? (
              <DetailePlayers team="A" PlayersA={PlayersA} />
            ) : (
              <DetailePlayers team="B" PlayersA={PlayersB} />
            )}
          </div>
          <div className="flex  max-sm:mt-2  gap-3 mt-9 items-center px-3">
            <h1>Time</h1>
            <div className=" text-secondary text-lg">
              18 Jul, 8:00PM-11:30PM
            </div>
          </div>
          <div className="flex  max-sm:mt-0  gap-3 mt-7 items-center px-3">
            <h1>Cost</h1>
            <div className=" text-secondary text-lg">150 SAR</div>
          </div>
          <div className=" mt-4  max-sm:mt-0 px-3">
            <br />

            {/* <span className="">Volleyball Ground </span> */}
            <address className="text-sm">Volleyball Ground </address>
          </div>
          <iframe
            className="justify-between max-sm:w-full rounded-t-md
         p-3"
            width="600"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28984.649675036628!2d46.65272988916017!3d24.758404600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee391d45fed47%3A0x288dfaf3ede32e76!2z2YXZhNi52Kgg2KfZhNmD2LHYqSDYp9mE2LfYp9im2LHYqSAtIFZvbGxleWJhbGwgR3JvdW5k!5e0!3m2!1sar!2ssa!4v1721094221754!5m2!1sar!2ssa"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
