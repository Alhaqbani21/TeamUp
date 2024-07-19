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
  const NewPlayes = [
    {
      name: "Amwaj",
      point: 100,
      team: "A",
    },
    {
      name: "reem",
      point: 90,
      team: "B",
    },
  ];

  return (
    <div className="shadow-md h-max rounded-xl mt-7 max-sm:mt-8  max-xl:  w-full text-xl text-black bg-base-100 px-7 ">
      <div className="border-black">
        {NewPlayes.length > 0 && (
          <table className="table table-zebra ">
            <thead>
              <th></th>
              <th>Name</th>
              <th>Team</th>
              <th>Rank</th>
              <th>Accept</th>
            </thead>

            <tbody>
              {NewPlayes.map((item, index) => (
                <tr>
                  <th>{index}</th>
                  <td>{item.name}</td>
                  <td>{item.team}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-7"
                        src={getRankImage(item.point)}
                        alt="Rank"
                      />
                      <span> {item.point}</span>
                    </div>
                  </td>
                  <th className=" flex gap-2">
                    <svg
                      className="w-6 hover:cursor-pointer h-6 text-base-100 bg-secondary rounded-full  "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 11.917 9.724 16.5 19 7.5"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 hover:cursor-pointer text-base-100 bg-error rounded-full  "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
   <br />

      {/* teams */}
      <div
        className="flex justify-between 
  w-full p-3 max-sm:mt-5 "
      >
        {props.teamA == "TeamA" ? (
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col max-sm:p-0 items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200  font-bold text-secondary p-2 px-4">
              A
            </div>
            <div className=" flex  max-sm:grid max-xl:grid-cols-3 max-xl:grid max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full  max-sm:gap-2 gap-10  ">
              {props.PlayersA.map((player, index) => (
                <Fade
                  key={index}
                  duration={1000}
                  triggerOnce={true}
                  direction="right"
                >
                  <div>
                    {" "}
                    <p className="text-base  ">{player.name}</p>
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
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col  max-xl:grid-cols-3 max-xl:grid  items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200  font-bold text-secondary p-2 px-4">
              B
            </div>
            <div className=" flex text-base   max-sm:grid  max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full  max-sm:gap-2 gap-10  ">
              {props.PlayersB.map((player, index) => (
                <Fade
                  key={index}
                  duration={1000}
                  triggerOnce={true}
                  direction="right"
                >
                  <div>
                    {" "}
                    <p className=" ">{player.name}</p>
                    <div className="flex items-center gap-2">
                      <p className=" text-secondary ">{player.points}</p>
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

         {/* information */}
         <div className="flex gap-8  max-sm:gap-1 max-sm:mt-2 max-sm:px-4 mt-7 items-center">
        <div className="flex items-center gap-2">
          <MdAccessTime size={20} className="text-s" />
          <div className=" text- text-base">{props.time}</div>
        </div>

        <div className="flex items-center ">
          <MdOutlineAttachMoney size={20} className="text-secndary" />
          <div className=" text-secondry text-base">{props.cost}</div>
        </div>
      </div>
      <div
        className="flex  max-sm:mt-0 justify-between mt-4 rounded-t-md
w-full px-3"
      >
        <address className="text-sm mt-2">{props.location}</address>
      </div>

      
      <iframe
        className="justify-between  max-xl:w-full max-sm:w-full rounded-t-md
   p-3"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29017.660305389032!2d46.72867564155274!3d24.616530901515873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05d574d55b07%3A0xbdc4455d6a113c15!2z2KjYp9iv2YQg2KjZhNmIIFBhZGVsIEJsdWU!5e0!3m2!1sar!2ssa!4v1721319994254!5m2!1sar!2ssa"

        // src={props.map}
        width="600"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}


