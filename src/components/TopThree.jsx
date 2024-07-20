import React from 'react';

function TopThree({ players, crown }) {
  return (
    <div className="flex justify-center items-center mb-8 shadow-2xl p-2 rounded-xl ">
      {players[1] && (
        <div className="flex flex-col items-center mx-4">
          <img
            src={players[1].img}
            alt={players[1].name}
            className="w-24 h-24 rounded-full border-2 border-white"
          />
          <span className="text-lg font-semibold text-primary mt-2 truncate">
            {players[1].name}
          </span>
          <span className="text-sm text-blue-500">
            {players[1].points} points
          </span>
        </div>
      )}
      {players[0] && (
        <div className="flex flex-col items-center mx-4">
          <div className="relative">
            <img
              src={players[0].img}
              alt={players[0].name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <img
              src={crown}
              alt="crown"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-12"
            />
          </div>
          <span className="text-lg font-semibold text-primary mt-2 truncate">
            {players[0].name}
          </span>
          <span className="text-sm text-blue-500">
            {players[0].points} points
          </span>
        </div>
      )}
      {players[2] && (
        <div className="flex flex-col items-center mx-4">
          <img
            src={players[2].img}
            alt={players[2].name}
            className="w-24 h-24 rounded-full border-2 border-white"
          />
          <span className="text-lg font-semibold text-primary mt-2 truncate">
            {players[2].name}
          </span>
          <span className="text-sm text-blue-500">
            {players[2].points} points
          </span>
        </div>
      )}
    </div>
  );
}

export default TopThree;
