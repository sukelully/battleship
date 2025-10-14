import { Ship } from "./ship";

export class Gameboard {
  #size = 10;
  #board = Array(this.#size).fill(Array(this.#size));

  placeShip(x, y, length, isVertical = False) {
    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      if (isVertical) this.#board[y + i][x] = ship;
      else this.#board[y][x + i] = ship;
    }
  }

  receiveAttack(x, y) {

  }
}