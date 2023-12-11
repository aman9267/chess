import React from "react";
import "./Pieces.css";
import Piece from "./Piece";

const Pieces = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));

  for (let i = 0 ; i<8 ; i++){
    position[1][i] = "wp"
    position[6][i]= 'bp'

  }

  position[7][0] = "br";
  position[7][1] = "bn";
  position[7][2] = "bb";
  position[7][3] = "bq";
  position[7][4] = "bk";
  position[7][5] = "bb";
  position[7][6] = "bn";
  position[7][7] = "br";

  position[0][0] = "wr";
  position[0][1] = "wn";
  position[0][2] = "wb";
  position[0][3] = "wq";
  position[0][4] = "wk";
  position[0][5] = "wb";
  position[0][6] = "wn";
  position[0][7] = "wr";;
 

  console.log(position);

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;


// position[0][1] = "br";
// position[0][2] = "br";
// position[0][3] = "br";
// position[0][4] = "br";
// position[0][5] = "br";
// position[0][6] = "br";
// position[0][7] = "br";

// position[1][0] = "br";
// position[1][1] = "br";
// position[1][2] = "br";
// position[1][3] = "br";
// position[1][4] = "br";
// position[1][5] = "br";
// position[1][6] = "br";
// position[1][7] = "br";

// position[2][0] = "br";
// position[2][1] = "br";
// position[2][2] = "br";
// position[2][3] = "br";
// position[2][4] = "br";
// position[2][5] = "br";
// position[2][6] = "br";
// position[2][7] = "br";

// position[3][0] = "br";
// position[3][1] = "br";
// position[3][2] = "br";
// position[3][3] = "br";
// position[3][4] = "br";
// position[3][5] = "br";
// position[3][6] = "br";
// position[3][7] = "br";

// position[4][0] = "br";
// position[4][1] = "br";
// position[4][2] = "br";
// position[4][3] = "br";
// position[4][4] = "br";
// position[4][5] = "br";
// position[4][6] = "br";
// position[4][7] = "br";

// position[5][0] = "br";
// position[5][1] = "br";
// position[5][2] = "br";
// position[5][3] = "br";
// position[5][4] = "br";
// position[5][5] = "br";
// position[5][6] = "br";
// position[5][7] = "br";

// position[6][0] = "br";
// position[6][1] = "br";
// position[6][2] = "br";
// position[6][3] = "br";
// position[6][4] = "br";
// position[6][5] = "br";
// position[6][6] = "br";
// position[6][7] = "br";

// position[7][0] = "br";
// position[7][1] = "br";
// position[7][2] = "br";
// position[7][3] = "br";
// position[7][4] = "br";
// position[7][5] = "br";
// position[7][6] = "br";
// position[7][7] = "br";