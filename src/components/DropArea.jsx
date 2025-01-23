import React from "react";
import { useState } from "react";
import "../components/DropArea.css";
import fetchData from "./TaskListPage";
const DropArea = ({ onDrop, callbackProp }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop-area" : "hide-drop"}
      callbackProp={fetchData}
    >
      Drop Area
    </div>
  );
};
export default DropArea;
