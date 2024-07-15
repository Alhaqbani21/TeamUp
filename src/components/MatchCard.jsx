import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import { Fade } from 'react-awesome-reveal';

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

function MatchCard({
  title,
  distance,
  price,
  date,
  time,
  status,
  teamA,
  teamB,
  court,
  players,
  matchStatus,
  matchFee,
  backgroundImage,
}) {
  const totalPlayers = teamA.length + teamB.length;
  const joinedPlayers = [...teamA, ...teamB].filter(
    (player) => player.name
  ).length;
  const statusText =
    joinedPlayers === totalPlayers
      ? 'Match is full!'
      : `${joinedPlayers}/${totalPlayers} players joined`;

  return (
    <Fade triggerOnce={true} direction="right" className="w-[90%] ">
      <div
        className="w-full bg-white shadow-md overflow-hidden relative rounded-md"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 filter blur-lg"></div>
        <div className="relative p-4 ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-white">{title}</h1>
              <p className="text-sm text-gray-300">{distance} km away</p>
            </div>
            <div className="text-lg font-semibold bg-green-400 py-1 px-2 rounded-lg text-white">
              {price}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-300 text-sm">
              {date}, {time}
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="text-gray-300 bg-gray-700 py-1 px-2 rounded-lg">
              {status}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-300 mr-2 shadow-lg border-2 rounded-full px-3 py-1">
                A
              </div>
              <div className="flex flex-col gap-2">
                {teamA.map((player, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={player.img}
                      alt={player.name || 'Add Player'}
                    />
                    <div>
                      {player.name ? (
                        <>
                          <p className="text-sm font-medium text-white">
                            {player.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-blue-300">
                              {player.points} points
                            </p>
                            <img
                              className="w-7"
                              src={getRankImage(player.points)}
                              alt="Rank"
                            />
                          </div>
                        </>
                      ) : (
                        <button className="text-blue-300 text-sm font-medium px-4 py-2 bg-gray-700 rounded-lg transition-all hover:bg-gray-600">
                          Request to join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-300 mr-2 shadow-lg border-2 rounded-full px-3 py-1">
                B
              </div>
              <div className="flex flex-col gap-2">
                {teamB.map((player, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={player.img}
                      alt={player.name || 'Add Player'}
                    />
                    <div>
                      {player.name ? (
                        <>
                          <p className="text-sm font-medium text-white">
                            {player.name}
                          </p>
                          {player.points && (
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-blue-300">
                                {player.points} points
                              </p>
                              <img
                                className="w-7"
                                src={getRankImage(player.points)}
                                alt="Rank"
                              />
                            </div>
                          )}
                        </>
                      ) : (
                        <button className="text-blue-300 text-sm font-medium px-4 py-2 bg-gray-700 rounded-lg transition-all hover:bg-gray-600">
                          Request to join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-gray-300">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Court</span>
              <span className="font-bold text-white">{court}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Players</span>
              <span className="font-bold text-white">{players}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Time</span>
              <span className="font-bold text-white">{time}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 bg-gray-700 py-2 px-4 rounded-lg">
            <span className="text-gray-300 font-medium">{statusText}</span>
            <span className="text-white font-semibold">{matchFee}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default MatchCard;
