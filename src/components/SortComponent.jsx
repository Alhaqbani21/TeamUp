import React from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';

const SortComponent = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex w-max justify-center items-center ml-2 shadow-2xl p-1 border-[1px] border-gray-400 rounded-lg">
      <FaSortAlphaDown className="ps-2 text-secondary" size={25} />

      <select
        onChange={handleSortChange}
        className="w-40 h-full border-2  focus:outline-none  text-primary rounded px-1 md:px-3 py-0 md:py-1 tracking-wider bg-transparent"
      >
        <option value="">Sort by</option>
        <option value="distance">Distance</option>
        <option value="nearestFull">Nearest to Full</option>
      </select>
    </div>
  );
};

export default SortComponent;
