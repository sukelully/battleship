import { Ship } from './models/ship';
import { convertToCoordinates } from './utils';

export function renderBoard(container, player, opponentBoard) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');

  let index = 0;
  for (const cell of player.board.getBoard().flat()) {
    const cellDiv = document.createElement('div');
    cellDiv.setAttribute('data-index', index);
    cellDiv.addEventListener('click', () => {
      const { x, y } = convertToCoordinates(cellDiv.getAttribute('data-index'));
      player.attack(opponentBoard, x, y);
      console.log(player.board.getBoard());
    });
    boardDiv.appendChild(cellDiv);

    switch (cell) {
      case null:
        break;
      case true:
        cellDiv.classList.add('cell-hit');
        break;
      case false:
        cellDiv.classList.add('cell-miss');
        break;
      default:
        if (cell instanceof Ship) {
          cellDiv.classList.add('cell-ship');
        }
        break;
    }
    index++;
  }
  container.appendChild(boardDiv);
}
