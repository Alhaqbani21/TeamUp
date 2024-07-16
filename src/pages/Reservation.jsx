import React from "react";
import Padel from "./Padel";
import Platinum_1_Rank from "../assets/Platinum_1_Rank.png";
import Gold_1_Rank from "../assets/Gold_1_Rank.png";
import Iron_1_Rank from "../assets/Iron_1_Rank.png";
import Silver_1_Rank from "../assets/Silver_1_Rank.png";
import Basketball from "./Basketball";
import Volly from "./Volly";

export default function Reservation() {
  const [view, setview] = React.useState("padel");
  return (
    <div>
      <nav className=" flex gap-4 p-4 text-secondary text-lg">
        <span onClick={() => setview("Volly")} className="text-secondary">
          Volly ball
        </span>

        <span onClick={() => setview("Basketball")} className="text-secondary">
          Basketball
        </span>

        <span onClick={() => setview("padel")}>Padel</span>
      </nav>
      {view === "padel" ? (
        <Padel />
      ) : view === "Basketball" ? (
        <Basketball />
      ) : (
        <Volly />
      )}
    </div>
  );
}
