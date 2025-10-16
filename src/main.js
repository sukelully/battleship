import './style.css';
import { Gameboard } from './models/gameboard';
import { Ship } from './models/ship';
import { Player } from './models/player';

const initGame = (function () {
  const player = new Player();
  const computer = new Player(true);
})();
