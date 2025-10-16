import './styles/ui.css';
import './styles/board.css';
import { renderBoard } from './render';
// import { Gameboard } from './models/gameboard';
// import { Ship } from './models/ship';
import { Player } from './models/player';

(function () {
  const player = new Player();
  const computer = new Player(true);

  populateBoard(player.board);
  populateBoard(computer.board);

  initUI(player, computer);
})();

function populateBoard(board) {
  // Test placements
  board.placeShip(0, 0, 2);
  board.placeShip(5, 5, 3, true);
}

function initUI(player, computer) {
  const playerContainer = document.getElementById('player-container');
  const computerContainer = document.getElementById('computer-container');

  renderBoard(playerContainer, player, computer.board);
  renderBoard(computerContainer, computer, player.board);
}
