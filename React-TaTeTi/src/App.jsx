
import { useState } from 'react';
import './App.css'
import GameBoard from './components/GameBoard';
import { Home } from './components/Home'
import { Player } from './components/Player'
import { Winning } from './components/Winning';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};
const pointsForPlayer = {
  X: 0,
  O: 0,
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const THE_WINS_GAME = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  // columnas
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  // diagonales
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];
function App() {
  const [board, setBoard] = useState(INITIAL_GAME_BOARD);
  const [Winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('X')
  function handleCellClick(row, col) {
    setBoard(prevBoard => {
        const newBoard = prevBoard.map(r => [...r]);
        if (newBoard[row][col]) return prevBoard;
        newBoard[row][col] = currentPlayer; 
        setCurrentPlayer((currentPlayer == 'X') ? 'O' : 'X');

        THE_WINS_GAME.forEach(celda => {
          if (celda.every(([r, c]) => newBoard[r][c] === 'X')) {
            setWinner('X');
          }
          if (celda.every(([r, c]) => newBoard[r][c] === 'O')) {
            setWinner('O');
          }
        });
      if (Winner != 'X' || Winner != 'O') {
           if (newBoard.flat().every(cell => cell !== null)) {
            setWinner('Empate');
          }
        }
        return newBoard;
      });
  }
  function ReMatch() {
    if (Winner == 'X') {
      pointsForPlayer.X++;
    } else if(Winner == 'O'){
      pointsForPlayer.O++;
    }
    setWinner(null);
    setBoard(INITIAL_GAME_BOARD);
    setCurrentPlayer('X');
  }
  return (
    <>
     <Home/>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player playerNameDefault={PLAYERS.X} symbol={"X"} points={pointsForPlayer.X}/>
            <Player playerNameDefault={PLAYERS.O} symbol={"O"} points={pointsForPlayer.O} />
          </ol>
          <GameBoard board={board} onCellClick={handleCellClick} />
          {Winner && <Winning PlayerWin={Winner === 'Empate' ? "¡Empate!" : Winner === 'X' ? PLAYERS.X : PLAYERS.O}  restart={ReMatch} />}
        </div>
     </main>
    </>
  )
}

export default App
