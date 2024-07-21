import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { db } from "../config/firebase";
import { HiMiniXCircle } from "react-icons/hi2";
export default function Players(props) {
  const handeleject = async () => {
    const matchRef = doc(db, "matches", props.matchId);
    const matchSnapshot = await getDoc(matchRef);
    const matchData = matchSnapshot.data();
    let rejectArray = [];
    rejectArray = matchData.rejected;
    rejectArray.push({ name: props.name, userId: props.userId });

    const indexA = matchData.teamA.findIndex(
      (e) => e !== null && e.userId === props.userId
    );
    const indexB = matchData.teamB.findIndex(
      (e) => e !== null && e.userId === props.userId
    );
    let teamArray = [];

    if (indexA != -1) {
      teamArray = matchData.teamA;
      teamArray.splice(indexA, 1);
      // console.log(teamArray);
      await updateDoc(matchRef, { rejected: rejectArray, teamA: teamArray });
    } else if (indexB != -1) {
      teamArray = matchData.teamB;
      teamArray.splice(indexA, 1);
      await updateDoc(matchRef, { rejected: rejectArray, teamA: teamArray });
    }

  };
  return (
    <div
      className={
        "absolute   flex flex-col items-center " +
        props.x +
        "  w-24 mt-9 " +
        props.y
      }
    >
      {!props.isAdmin && (
        <HiMiniXCircle
          onClick={() => handeleject()}
          size={20}
          className="text-red-800 cursor-pointer "
        />
      )}

      <img className="" src={props.img} alt="" />
      <h1 className=" font-bold  text-center ">{props.name}</h1>
    </div>
  );
}
