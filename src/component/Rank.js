import React from "react";
import "./Rank.css";

export const Rank = ({ ranks }) => {
  return (
    <div className="ranks">
      {ranks.map((rank, i) => {
        return <span key={i}>{rank}</span>;
      })}
    </div>
  );
};
