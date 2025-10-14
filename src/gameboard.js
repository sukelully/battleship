import { Ship } from "./ship";

export class Gameboard {
  #size = 10;
  #board = Array.from({ length: this.#size }, () => Array(this.#size).fill(null));

  getCell(x, y) {
    return this.#board[x][y];
  }

  placeShip(x, y, length, isVertical = false) {
    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      if (isVertical) {
        this.#board[y + i][x] = ship;
      } else {
        this.#board[y][x + i] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    
  }
}