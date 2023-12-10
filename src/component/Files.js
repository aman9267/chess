import React from "react";
import './Files.css'

export const Files = ({ files }) => {
  return (
    <div className="files">
      {files.map((file, i) => {
        return <span>{file}</span>;
      })}
    </div>
  );
};
