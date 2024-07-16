import React from "react";

export default function Players(props) {
  return (
    <div className={"absolute " + props.x + "  w-24 mt-9 " + props.y}>

                <img className="" src={props.img} alt="" />
                <h1 className=" font-bold  text-center ">{props.name}</h1>
 </div>
  );
}
