import React, { useState } from "react";
import padel from "../assets/padel.jpg";
import team1 from "../assets/person2.png";
import team2 from "../assets/person3.png";
import Players from "../components/Players";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
// import V from "../assets/Video.mp4";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import { Fade } from "react-awesome-reveal";
import Timer from "../components/Timer";
import DetailePlayers from "../components/DetailePlayers";
export default function Padel() {
  const [teamA, setteamA] = useState("TeamA");

  const PlayersA = [
    { name: "Ali", points: 0 },
    { name: "Ahmed", points: 200 },
  ];
  const PlayersB = [
    { name: "Saad", points: 50 },
    { name: "You", points: 0 },
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
    <>
      {/* <video loop autoplay muted className="h-40">
        <source src={V} />
      </video> */}
      <main className="hero min-h-screen rounded-xl  ">
        <div className="w-[80vw] max-sm:flex-col max-sm:items-center max-sm:w-full gap-5 bg-base-100 rounded-lg flex">
          <div className="h-[70vh]  max-sm:h-[50vh] max-sm:w-[80vw] w-[60vw] rounded-s-xl relative ">
            <div className="w-full pt-3 justify-around bg-transparent   flex gap-1">
              <div className="">
                <img
                  src={team1}
                  // style={{
                  //   backgroundColor: teamA == "TeamA" ? "#232f3e" : "#596a7e",
                  // }}
                  onClick={() => setteamA("TeamA")}
                  className=" rounded-full  bg-primary h-12 w-12 "
                />
                Team A
              </div>
              <div className="flex flex-col justify-center items-center">
                <Timer date={"Jul 17, 2024 17:00:00"} />
                05:00 PM
              </div>
              <div>
                {" "}
                <img
                  src={team2}
                  // style={{
                  //   backgroundColor: teamA == "TeamA" ? "#232f3e" : "#596a7e",
                  // }}
                  onClick={() => setteamA("TeamB")}
                  className=" rounded-full  bg-base-300 h-12 w-12 "
                />
                Team B
              </div>
            </div>

            <img
              className="h-[70vh] max-sm:w-full max-sm:h-[40vh] w-[60vw]"
              src={padel}
              alt=""
            />
            {teamA == "TeamA" ? (
              <div
                                        >
                {" "}
                <Players name="Ali" x="left-20" y="top-24" img={team1} />
                <Players name="Ahmed" x="right-20" y="top-24" img={team1} />
              </div>
            ) : (
              <div
              >
                <Players name="Saad" x="right-20" y="bottom-10" img={team2} />{" "}
                <Players name="You" x="left-20" y="bottom-10" img={team2} />
              </div>
            )}
          </div>

          <div className=" w-full   h-max text-xl text-black bg-base-100 px-7 ">
            <div
              className="flex justify-between
        w-full p-3  "
            >
              {teamA == "TeamA" ? (
                      <DetailePlayers team='A' PlayersA={PlayersA}/>

              ) : (
                <DetailePlayers team='B' PlayersA={PlayersB}/>

              )}
            </div>
            {/* <div className=" max-sm:mt-2  gap-3 mt-7 items-center px-3">
          <h1>  Time remaining</h1> 
           </div> */}
            <div className="flex max-sm:mt-2  gap-3 mt-7 items-center px-3">
              <h1>Time</h1>
              <div className=" text-secondary text-lg">
                17 Jul, 5:00PM-6:30PM
              </div>
            </div>
            <div className="flex max-sm:mt-0  gap-3 mt-7 items-center px-3">
              <h1>Cost</h1>
              <div className="text-secondary text-lg">200 SAR</div>
            </div>
            <div
              className="flex max-sm:mt-0  justify-between mt-4 rounded-t-md
   w-full px-3"
            >
              <span className="">Riyadh Padel </span>
            </div>
            <iframe
                className="justify-between max-sm:w-full rounded-t-md
         p-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231841.9078419849!2d47.07881927490232!3d24.77730544035784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f012025ed9db1%3A0xa56f148f6e1a0b53!2zUml5YWRoIFBhZGVsIHwg2YXYsdmD2LIg2KjYp9iv2YQg2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1720995659360!5m2!1sar!2ssa"
              width="600"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>{" "}
    </>
  );
}
