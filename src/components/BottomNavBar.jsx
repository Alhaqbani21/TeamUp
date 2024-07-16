import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { MdOutlineLeaderboard, MdSportsHandball } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { BiUserCircle } from 'react-icons/bi';

function BottomNavBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleIconClick = (path) => {
    setActivePath(path);
  };

  return (
    <aside className="md:hidden fixed bottom-0 w-full bg-primary py-5 z-50 flex justify-around items-center rounded-t-3xl">
      <Link to={'../'} onClick={() => handleIconClick('../')}>
        <div
          className={`flex flex-col items-center ${
            activePath === '../' ? 'text-secondary font-bold' : 'text-white'
          }`}
        >
          <IoHomeOutline size={25} />
        </div>
      </Link>
      <Link to={'../Book'} onClick={() => handleIconClick('../Book')}>
        <div
          className={`flex flex-col items-center ${
            activePath === '../Book' ? 'text-secondary font-bold' : 'text-white'
          }`}
        >
          <CiCirclePlus size={25} />
        </div>
      </Link>
      <Link to={'../top10'} onClick={() => handleIconClick('../top10')}>
        <div
          className={`flex flex-col items-center ${
            activePath === '../top10'
              ? 'text-secondary font-bold'
              : 'text-white'
          }`}
        >
          <MdOutlineLeaderboard size={25} />
        </div>
      </Link>
      <Link to={'../Players'} onClick={() => handleIconClick('../Players')}>
        <div
          className={`flex flex-col items-center ${
            activePath === '../Players'
              ? 'text-secondary font-bold'
              : 'text-white'
          }`}
        >
          <MdSportsHandball
            size={25}
            className="group-hover:text-black text-white"
          />
        </div>
      </Link>
      <Link to={'../profile'} onClick={() => handleIconClick('../profile')}>
        <div
          className={`flex flex-col items-center ${
            activePath === '../profile'
              ? 'text-secondary font-bold'
              : 'text-white'
          }`}
        >
          <BiUserCircle size={25} />
        </div>
      </Link>
    </aside>
  );
}

export default BottomNavBar;
