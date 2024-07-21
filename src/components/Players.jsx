import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { db } from '../config/firebase';
import { HiMiniXCircle } from 'react-icons/hi2';
export default function Players(props) {
  return (
    <div
      className={
        'absolute   flex flex-col items-center ' +
        props.x +
        '  w-24 mt-9 ' +
        props.y
      }
    >
      {!props.isAdmin && (
        <HiMiniXCircle
          onClick={props.onEject}
          size={20}
          className="text-red-800 cursor-pointer "
        />
      )}

      <img className="" src={props.img} alt="" />
      <h1 className=" font-bold  text-center ">{props.name}</h1>
    </div>
  );
}
