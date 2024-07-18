import React from "react";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import { MdOutlineAttachMoney, MdAccessTime } from "react-icons/md";

import { Fade } from "react-awesome-reveal";
export default function DetailePlayers(props) {
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
    <div className=" max-sm:mt-8 w-full h-max text-xl text-black bg-base-100 px-7 ">
      {/* <Timer date="Jul 16, 2024 19:00:00" /> */}

      <div
        className="flex justify-between 
  w-full p-3 max-sm:mt-5 "
      >
        {props.teamA == "TeamA" ? (
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col max-sm:p-0 items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200  font-bold text-secondary p-2 px-4">
              A
            </div>
            <div className=" flex  max-sm:grid  max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full  max-sm:gap-2 gap-10  ">
              {props.PlayersA.map((player, index) => (
                <Fade
                  key={index}
                  duration={1000}
                  triggerOnce={true}
                  direction="right"
                >
                  <div>
                    {" "}
                    <p className="text-lg font-medium ">{player.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-base text-secondary ">
                        {player.points}
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
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col  items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200  font-bold text-secondary p-2 px-4">
              B
            </div>
            <div className=" flex  max-sm:grid  max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full  max-sm:gap-2 gap-10  ">
              {props.PlayersB.map((player, index) => (
                <Fade
                  key={index}
                  duration={1000}
                  triggerOnce={true}
                  direction="right"
                >
                  <div>
                    {" "}
                    <p className="text-lg font-medium ">{player.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-base text-secondary ">
                        {player.points}
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
        )}
      </div>

      <div className="flex gap-8 max-sm:gap-1 max-sm:mt-2 max-sm:px-4 mt-7 items-center">
        <div className="flex gap-2">
          <MdAccessTime size={28} className="text-s" />
          <div className=" text-secy text-lg">{props.time}</div>
        </div>

        <div className="flex ">
          <MdOutlineAttachMoney size={28} className="text-secndary" />
          <div className=" text-secondry text-lg">{props.cost}</div>
        </div>
      </div>
      <div
        className="flex  max-sm:mt-0 justify-between mt-4 rounded-t-md
w-full px-3"
      >
        <address className="text-sm mt-2">{props.location}</address>
      </div>
      <iframe
        className="justify-between max-sm:w-full rounded-t-md
   p-3"
        src={props.map}
        width="600"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
