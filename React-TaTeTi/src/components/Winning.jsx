import React from 'react'

export const Winning = ({PlayerWin, restart}) => {
  return (
    <>
      <div id="game-over">
        <h2>The end game</h2>
        {PlayerWin != "Empate" ?
          <p>Players wins : {PlayerWin}</p> : <p>Empate</p>}
        <button onClick={restart}>¡Rematch!</button>
      </div>
    </>
  )
}
