import React from 'react';
import Platinum_1_Rank from '../assets/Platinum_1_Rank.png';
import Gold_1_Rank from '../assets/Gold_1_Rank.png';
import Iron_1_Rank from '../assets/Iron_1_Rank.png';
import Silver_1_Rank from '../assets/Silver_1_Rank.png';

function RankSteps() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-xl font-semibold text-primary mb-4">Rank Tiers</div>
      <div className="flex justify-around w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white">
            <img src={Iron_1_Rank} alt="" />
          </div>
          <span className="mt-2 text-gray-600">0 - 49</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white">
            <img src={Silver_1_Rank} alt="" />
          </div>
          <span className="mt-2 text-gray-600">50 - 99</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white">
            <img src={Gold_1_Rank} alt="" />
          </div>
          <span className="mt-2 text-gray-600">100 - 149</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center text-white">
            <img src={Platinum_1_Rank} alt="" />
          </div>
          <span className="mt-2 text-gray-600">150+</span>
        </div>
      </div>
    </div>
  );
}

export default RankSteps;
