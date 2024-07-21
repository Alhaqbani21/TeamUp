import React from "react";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import { MdOutlineAttachMoney, MdAccessTime } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { TbUserDollar } from "react-icons/tb";
export default function DetailePlayers(props) {
  function getRankImage(point) {
    if (point >= 150) {
      return Platinum_1_Rank;
    } else if (point >= 100) {
      return Gold_1_Rank;
    } else if (point >= 50) {
      return Silver_1_Rank;
    } else {
      return Iron_1_Rank;
    }
  }
  const total = props.PlayersB.length + props.PlayersA.length;
  // Filter out pending players for team B if team B is full
  const filteredPendingPlayers = props.pendingPlayers.filter((player) => {
    if (player.team === "B" && props.PlayersB.every((p) => p && p.name)) {
      return false; // Exclude player if team B is full
    }
    return true;
  });

  return (
    <div className="shadow-md h-max w-max rounded-xl mt-7 max-sm:mt-0 max-xl:w-full text-xl text-black bg-base-100 px-7">
      {props.isAdmin && filteredPendingPlayers.length > 0 && (
        <div className="border-black max-h-60 overflow-y-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Team</th>
                <th>Rank</th>
                <th>Accept</th>
              </tr>
            </thead>
            <tbody>
              {filteredPendingPlayers
                .filter((player) => player && player.name) // Ensure player and player.name are not null
                .map((item, index) => (
                  <tr key={index}>
                    <th>{index}</th>
                    <td>{item.name}</td>
                    <td>{item.team}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <img
                          className="w-7"
                          src={getRankImage(item.point || 0)}
                          alt="Rank"
                        />
                        <span>{item.point || 0}</span>
                      </div>
                    </td>
                    <td className="flex gap-2">
                      <svg
                        onClick={() => props.onAccept(item)}
                        className="w-6 hover:cursor-pointer h-6 text-base-100 bg-secondary rounded-full"
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
                          d="M5 11.917L9.724 16.5 19 7.5"
                        />
                      </svg>
                      <svg
                        onClick={() => props.onReject(item)}
                        className="w-6 h-6 hover:cursor-pointer text-base-100 bg-error rounded-full"
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
                          d="M6 18L17.94 6M18 18L6.06 6"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <br />
      {/* teams */}
      <div className="flex justify-between w-full p-3 max-sm:mt-5">
        {props.teamA === "TeamA" ? (
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col max-sm:p-0 items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200 font-bold text-secondary p-2 px-4">
              A
            </div>
            <div className="flex max-sm:grid max-xl:grid-cols-3 max-xl:grid max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full max-sm:gap-2 gap-10">
              {props.PlayersA.filter((player) => player && player.name).map(
                (player, index) => (
                  <Fade
                    key={index}
                    duration={1000}
                    triggerOnce={true}
                    direction="right"
                  >
                    <div>
                      <p className="text-base">{player.name}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-base text-secondary">
                          {player.point}
                        </p>
                        <img
                          className="w-7"
                          src={getRankImage(player.point)}
                          alt="Rank"
                        />
                      </div>
                    </div>
                  </Fade>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="flex max-sm:justify-center max-sm:w-full max-sm:flex-col max-sm:p-0 items-center max-sm:gap-1 gap-6">
            <div className="text-xl rounded-full bg-base-200 font-bold text-secondary p-2 px-4">
              B
            </div>
            <div className="flex text-base max-sm:grid max-sm:grid-cols-3 max-sm:justify-items-center max-sm:w-full max-sm:gap-2 gap-10">
              {props.PlayersB.filter((player) => player && player.name).map(
                (player, index) => (
                  <Fade
                    key={index}
                    duration={1000}
                    triggerOnce={true}
                    direction="right"
                  >
                    <div>
                      <p className="">{player.name}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-secondary">{player.point}</p>
                        <img
                          className="w-7"
                          src={getRankImage(player.point)}
                          alt="Rank"
                        />
                      </div>
                    </div>
                  </Fade>
                )
              )}
            </div>
          </div>
        )}
      </div>
      {/* information */}
      <div className="flex gap-8 max-sm:gap-1 max-sm:mt-2 max-sm:px-4 mt-7 items-center">
        <div className="flex items-center gap-2">
          <MdAccessTime size={20} className="text-s" />
          <div className="text-base">{props.time}</div>
        </div>
        <div className="tooltip" data-tip="Pirce">

        <div className="flex items-center">
          <MdOutlineAttachMoney size={20} className="text-secndary" />
          <div className="text-secondry text-base">{props.cost}</div>
        </div>
        </div>
        <div className="tooltip" data-tip="Split the bill">
          <div className="flex items-center">
            <TbUserDollar size={20} className="text-secndary" />
            <div className="text-secondry text-base">{props.cost / total}</div>
          </div>
        </div>
      </div>

      <iframe
        className="justify-between max-xl:w-full max-sm:w-full rounded-t-md p-3"
        src={props.location}
        width="500"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
