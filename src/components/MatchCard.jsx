import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from 'react-awesome-reveal';

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
}) {
  return (
    <Fade triggerOnce={true} direction="right" className="w-[90%]">
      <div className="w-full bg-white shadow-md overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm text-gray-500">{distance} km away</p>
            </div>
            <div className="text-lg font-semibold bg-green-400 py-1 px-2 rounded-lg">
              {price}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-600 text-sm">
              {date}, {time}
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="text-gray-500 bg-gray-100 py-1 px-2 rounded-lg">
              {status}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-600 mr-2 shadow-lg border-2 rounded-full px-3 py-1">
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
                          <p className="text-sm font-medium">{player.name}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-blue-500">
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
                        <button className="text-green-500 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg">
                          Request to join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-600 mr-2 shadow-lg border-2 rounded-full px-3 py-1">
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
                          <p className="text-sm font-medium">{player.name}</p>
                          {player.points && (
                            <div className="flex items-center gap-2">
                              <p className="text-xs text-blue-500">
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
                        <button className="text-green-500 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg">
                          Request to join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Court</span>
              <span className="font-bold text-black">{court}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Players</span>
              <span className="font-bold text-black">{players}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Time</span>
              <span className="font-bold text-black">{time}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 bg-gray-200 py-2 px-4 rounded-lg">
            <span className="text-gray-600 font-medium">{matchStatus}</span>
            <span className="text-black font-semibold">{matchFee}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default MatchCard;
