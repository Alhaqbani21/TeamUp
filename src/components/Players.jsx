import React from "react";

export default function Players(props) {
  return (
    <div className={"absolute " + props.x + "  w-24 mt-9 " + props.y}>
      {/* <h1 className=" font-bold text-center text-white"> </h1> */}
      {/* <div className="absolute top-9 left-20  w-32 "> */}
                <img className="" src={props.img} alt="" />
                <h1 className=" font-bold  text-center text-white">{props.name}</h1>
              {/* </div> */}
      {/* <img className="h-16 w-16  rounded-full" src={props.img} alt="" /> */}
    </div>
  );
}
