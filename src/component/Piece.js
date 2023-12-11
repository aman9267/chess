import React from "react";
import "./Piece.css";

const Piece = ({ rank, file, piece }) => {
  console.log(piece, rank, file)

  return <div className={`piece ${piece} p-${file}${rank}`} />
};

export default Piece;
