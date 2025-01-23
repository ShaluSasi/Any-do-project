import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedName, setChangedName] = useState(name);
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    setChangedName(event.target.value);
  }
  let playerName = <span className="player-name">{changedName}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" value={changedName} required onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
