import React from "react";
// import {getCharacter} from '../helper.js'
import "./Board.css";
import { Rank } from "./Rank";
import { Files } from "./Files";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => String.fromCharCode(i + 97));
  // const files = Array(8).fill().map((x,i)=> getCharacter(i))
  // const item = [1,2,3 ,4,5,6,7,8]
  // const list = ["a","b","c","d","e","f","g","h"]
  const tailsColor = (i)=> i % 2 === 0 ? 'dark-color' : 'light-color';
  // i / 2 == 0 ? 'dark' : 'light'
  return (
    <div className="board">
      <Rank ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank,i) => files.map((file, j) => <div key={j} className={tailsColor(i+j)}>{rank}{file}</div>))}
      </div>
      <Files files={files} />
    </div>
  );
};

export default Board;
