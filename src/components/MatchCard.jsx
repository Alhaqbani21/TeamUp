import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import { Fade } from 'react-awesome-reveal';
import moment from 'moment';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

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

function getBackgroundColor(matchTime) {
  const now = moment();
  const matchMoment = moment(matchTime, 'DD MMM, h:mmA');
  if (matchMoment.diff(now, 'hours') <= 2) {
    return 'bg-secondary';
  } else {
    return 'bg-orange-400';
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
  onRequestJoin,
  matchId,
}) {
  const totalPlayers = teamA.length + teamB.length;
  const joinedPlayers = [...teamA, ...teamB].filter(
    (player) => player.name
  ).length;
  const statusText =
    joinedPlayers === totalPlayers
      ? 'Match is full!'
      : `${joinedPlayers}/${totalPlayers} players joined`;

  const matchTime = `${date}, ${time}`;
  const backgroundColor = getBackgroundColor(matchTime);

  return (
    <Fade triggerOnce={true} direction="right" className="w-[90%] ">
      <div
        className={`w-full shadow-md bg-primary overflow-hidden relative rounded-md`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 filter blur-lg"></div>
        <div className="relative p-4  flex flex-col justify-center">
          {/* Here */}
          <div className="flex justify-between items-center border-b-[1px] py-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-white">{title}</h1>
              <p className="text-sm text-gray-300">{distance} km away</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-300 text-sm">
                  {date}, {time}
                </div>
              </div>
            </div>

            <div className="text-lg font-semibold bg-secondary py-1 px-2 rounded-lg text-white">
              {price}
            </div>
          </div>

          {/* Here */}
          <div
            className={`w-max text-white self-center  text-lg my-4  bg-gray-700 ${backgroundColor} py-1 px-2 rounded-lg`}
          >
            {status}
          </div>
          <div className="flex max-md:flex-col justify-around items-center my-5 ">
            <div className="flex justify-start items-center max-md:mb-10 max-md:self-start">
              <div className="text-xl font-bold  mr-6 shadow-lg border-2  border-orange-300 text-orange-300 rounded-full px-3 py-1">
                A
              </div>
              <div className="grid grid-cols-2 max-md:gap-x-1 gap-x-4 gap-y-10 min-w-full">
                {teamA.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 flex-wrap"
                  >
                    <img
                      className="max-md:h-8 max-md:w-8 h-10 w-10 rounded-full"
                      src={player.img}
                      alt={player.name || 'Add Player'}
                    />
                    <div className="text-wrap">
                      {player.name ? (
                        <div className="">
                          <p className="text-sm font-medium text-white  max-md:text-xs">
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
                        </div>
                      ) : (
                        <button
                          className="text-orange-300 text-sm font-medium px-4 py-2 max-md:text-xs bg-gray-700 rounded-lg transition-all hover:bg-gray-600"
                          onClick={() => onRequestJoin('A', index, matchId)}
                        >
                          Join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-orange-300 tracking-wide text-4xl rounded-full p-2 ">
              VS
            </div>
            <div className="flex justify-start items-center max-md:mt-10 max-md:self-start">
              <div className="text-xl font-bold border-orange-300 text-orange-300 mr-6 shadow-lg border-2 rounded-full px-3 py-1">
                B
              </div>
              <div className="grid grid-cols-2 max-md:gap-x-1 gap-x-4 gap-y-10 min-w-full">
                {teamB.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 flex-wrap"
                  >
                    <img
                      className="max-md:h-8 max-md:w-8 h-10 w-10 rounded-full"
                      src={player.img}
                      alt={player.name || 'Add Player'}
                    />
                    <div className="text-wrap">
                      {player.name ? (
                        <>
                          <p className="text-sm font-medium text-white  max-md:text-xs">
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
                        <button
                          className="text-orange-300 text-sm font-medium px-4 py-2 max-md:text-xs bg-gray-700 rounded-lg transition-all hover:bg-gray-600"
                          onClick={() => onRequestJoin('B', index, matchId)}
                        >
                          Join
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-gray-300">
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-lg tracking-widest">
                Court
              </span>
              <span className="font-bold text-white">{court}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-lg tracking-widest">
                Players
              </span>
              <span className="font-bold text-white">{players}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-lg tracking-widest">
                Time
              </span>
              <span className="font-bold text-white">{time}</span>
            </div>
          </div> */}
          <div
            className={`flex justify-between items-center mt-4 ${
              statusText === 'Match is full!' ? `bg-gray-400` : 'bg-secondary '
            }  py-2 px-4 rounded-lg`}
          >
            <span className="font-medium text-white">
              {statusText === 'Match is full!' ? (
                statusText
              ) : (
                <>
                  <span className="text-orange-300 mr-1">{`${joinedPlayers}/${totalPlayers}`}</span>
                  {' players joined'}
                </>
              )}
            </span>
            <span className="text-white font-semibold">Cut is {matchFee}</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default MatchCard;
