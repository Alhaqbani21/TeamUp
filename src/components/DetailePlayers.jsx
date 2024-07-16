import React from 'react'
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";

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
    <div className="flex  max-sm:flex-col  items-center  gap-6">
    <div className="text-xl  font-bold text-secondary m-2 shadow-lg border-2 rounded-full px-3 h-10">
     {props.team}
    </div>
    <div className=" flex  max-sm:grid  max-sm:grid-cols-3  max-sm:gap-2 gap-10  ">
      {props.PlayersA.map((player) => (
        <Fade duration={1000} triggerOnce={true} direction="right">
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
  )
}