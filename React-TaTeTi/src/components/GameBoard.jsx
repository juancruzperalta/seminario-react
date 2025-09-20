export default function GameBoard({board, onCellClick}) {
  return (
    <ol id="game-board">
      {board.map((row, r) => (
        <li key={r}>
          <ol>
            {row.map((cell, c) => (
              <li key={c}>
                <button onClick={() => onCellClick(r, c)}>
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
