import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';

function LeaderboardTable({ players }) {
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
    <div className="w-[70%] max-md:w-[90%]">
      {players.map((player, index) => (
        <div
          key={player.rank}
          className={`flex items-center p-4 ${
            index % 2 === 0 ? 'bg-primary' : 'bg-[#3146617c]'
          } rounded-lg my-2 shadow-lg`}
        >
          <div className="text-2xl font-bold text-white w-8">{player.rank}</div>
          <img
            src={player.img}
            alt={player.name}
            className="w-10 h-10 rounded-full mx-4"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">
              {player.name}
            </span>
            <span
              className={`text-md text-blue-400 ${
                index % 2 === 0 ? 'text-blue-400' : 'text-blue-900'
              }`}
            >
              {player.points} points
            </span>
          </div>
          <div className="flex flex-1 flex-row-reverse">
            <img className="w-7" src={getRankImage(player.points)} alt="Rank" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaderboardTable;
