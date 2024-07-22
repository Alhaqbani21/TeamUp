import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';
import { Fade } from 'react-awesome-reveal';
import moment from 'moment';

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

function getBackgroundColor(matchTime) {
  const now = moment();
  const matchMoment = moment(matchTime, 'DD MMM, h:mmA');
  if (matchMoment.diff(now, 'hours') <= 2) {
    return 'bg-secondary';
  } else {
    return 'bg-orange-400';
  }
}

function truncateName(name, maxLength = 12) {
  return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
}

function MatchCard({
  stadiumName,
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
  admin,
  pending = [],
  currentUserId,
  rejected = [],
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

  const isPending = pending.some((p) => p.userId === currentUserId);
  const isRejected = rejected.some((p) => p.userId === currentUserId);
  const isInTeam = [...teamA, ...teamB].some(
    (player) => player.userId === currentUserId
  );
  const disableButtons = isPending || isInTeam || isRejected;

  return (
    <Fade triggerOnce={true} direction="right" className="w-[90%]">
      <div
        className={`w-full shadow-md bg-primary overflow-hidden relative rounded-md`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 filter blur-lg"></div>
        <div className="relative p-4 flex flex-col justify-center">
          <div className="flex justify-between items-center border-b-[1px] py-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-white">{stadiumName}</h1>
              <p className="text-sm text-gray-300 mt-3">{distance}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-300 text-sm">
                  {date}, {`${time} PM`}
                </div>
              </div>
            </div>

            <div className="text-lg font-semibold bg-secondary py-1 px-2 rounded-lg text-white">
              {`${price} SAR`}
            </div>
          </div>

          <div className="flex max-md:flex-col justify-around items-center my-5 md:grid md:grid-cols-3 md:place-items-center">
            <div className="flex justify-start items-center max-md:mb-10 max-md:self-start max-md:w-full">
              <div className="text-xl font-bold mr-6 shadow-lg border-2 border-orange-300 text-orange-300 rounded-full px-3 py-1">
                A
              </div>
              <div className="grid grid-cols-2 max-md:gap-x-1 gap-y-10 min-w-full gap-x-4">
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
                          <p className="text-sm font-medium text-white max-md:text-xs">
                            {truncateName(player.name)}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-blue-300">
                              {player.point} points
                            </p>
                            <img
                              className="w-7"
                              src={getRankImage(player.point)}
                              alt="Rank"
                            />
                          </div>
                        </div>
                      ) : (
                        <button
                          className={`text-sm font-medium px-4 py-2 max-md:text-xs bg-gray-700 rounded-lg transition-all ${
                            disableButtons
                              ? isRejected
                                ? 'text-red-300 cursor-not-allowed'
                                : 'text-gray-300 cursor-not-allowed'
                              : 'text-orange-300 hover:bg-gray-600'
                          }`}
                          onClick={() => onRequestJoin('A', index, matchId)}
                          disabled={disableButtons}
                        >
                          {isRejected
                            ? 'Rejected'
                            : isPending
                            ? 'Pending'
                            : 'Join'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full justify-center items-center ">
              <div className="text-orange-300 tracking-wide text-4xl rounded-full p-2 flex items-center justify-center ">
                VS
              </div>
            </div>
            <div className="flex justify-start items-center max-md:mt-10 max-md:self-start max-md:w-full">
              <div className="text-xl font-bold border-orange-300 text-orange-300 mr-6 shadow-lg border-2 rounded-full px-3 py-1">
                B
              </div>
              <div className="grid grid-cols-2 max-md:gap-x-1 gap-y-10 min-w-full gap-x-4">
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
                          <p className="text-sm font-medium text-white max-md:text-xs">
                            {truncateName(player.name)}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-blue-300">
                              {player.point} points
                            </p>
                            <img
                              className="w-7"
                              src={getRankImage(player.point)}
                              alt="Rank"
                            />
                          </div>
                        </>
                      ) : (
                        <button
                          className={`text-sm font-medium px-4 py-2 max-md:text-xs bg-gray-700 rounded-lg transition-all ${
                            disableButtons
                              ? isRejected
                                ? 'text-red-300 cursor-not-allowed'
                                : 'text-gray-300 cursor-not-allowed'
                              : 'text-orange-300 hover:bg-gray-600'
                          }`}
                          onClick={() => onRequestJoin('B', index, matchId)}
                          disabled={disableButtons}
                        >
                          {isRejected
                            ? 'Rejected'
                            : isPending
                            ? 'Pending'
                            : 'Join'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`flex justify-between items-center mt-4 ${
              statusText === 'Match is full!' ? `bg-gray-400` : 'bg-secondary'
            } py-2 px-4 rounded-lg`}
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
            <span className="text-white font-semibold">
              Cut is{' '}
              <span className="text-orange-300 mr-1 font-bold">
                {' '}
                {price / totalPlayers}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default MatchCard;
