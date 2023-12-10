import React from "react";
// import {getCharacter} from '../helper.js'
import "./Board.css";

const Board = () => {
  const rank = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => String.fromCharCode(i + 97));
  // const files = Array(8).fill().map((x,i)=> getCharacter(i))

  // const item = [1,2,3 ,4,5,6,7,8]
  // const list = ["a","b","c","d","e","f","g","h"]
  return (
    <div className="board">
      <div className="tiles">
        {rank.map((rank, i) => {
          return (
            <div key={i}>
              {files.map((file, j) => {
                return (
                  <div key={j}>
                    {rank}
                    {file}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
