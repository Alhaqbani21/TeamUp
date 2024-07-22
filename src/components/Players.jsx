import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { db, auth } from '../config/firebase';
import { HiMiniXCircle } from 'react-icons/hi2';
export default function Players(props) {
  const user = auth.currentUser.uid;
  function truncateName(name, maxLength = 7) {
    return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
  }
  return (
    <div
      className={
        'absolute   flex flex-col items-center ' + props.x + '  w-24 ' + props.y
      }
    >
      {/* {!props.isAdmin && ( */}

      <div className="flex backdrop-blur-sm bg-white/20 rounded-xl p-1 z-10">
        {user == props.AdminId && (
          <>
            {' '}
            {!props.isAdmin && (
              <HiMiniXCircle
                onClick={props.onEject}
                size={20}
                className="text-red-800 cursor-pointer "
              />
            )}
          </>
        )}
        <small className=" font-bold  text-center ">
          {truncateName(props.name)}
        </small>
      </div>

      {/* )} */}

      <img className="" src={props.img} alt="" />
      {/* {console.log("player")} */}
      {/* {console.log(props.onEject)} */}
      {/* <h1 className=" font-bold  text-center ">{truncateName(props.name)}</h1> */}
    </div>
  );
}
