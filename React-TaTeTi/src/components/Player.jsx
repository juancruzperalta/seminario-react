import React, { useState } from 'react'
export const Player = ({ playerNameDefault, symbol, points}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(playerNameDefault);
  let editableInput = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editableInput = (
      <input
        type="text"
        className="player-input"
          value={playerName}
          onChange={onInputChange}
          />
        );
      } else {
        if (playerName == '') {
          setPlayerName(playerNameDefault);
        }
    editableInput = <span className="player-name">{playerName}</span>;
    }
  function buttonEditing() {
    setIsEditing((prev) => !prev); 
  }

  function onInputChange(event) {
     setPlayerName(event.target.value);
  }
  return (
    <>
<div className="player-container">
      <span className={`player ${symbol}`}>{symbol}</span>
      
        {editableInput}

      <span className="points">{points}</span>
      <button onClick={buttonEditing}>
        {isEditing ? 'save' : 'edit'}
      </button>
    </div>

    </>
  )
}
