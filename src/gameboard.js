import { Ship } from "./ship";

export class Gameboard {
  #size = 10;
  #board = Array.from({ length: this.#size }, () => Array(this.#size).fill(null));

  getCell(x, y) {
    return this.#board[x][y];
  }

  placeShip(x, y, length, isVertical = false) {
    if (x + length > this.#size || y + length > this.#size) return 'Error: Ship out of bounds';

    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      if (isVertical) {
        this.#board[y + i][x] = ship;
      } else {
        this.#board[y][x + i] = ship;
      }
    }
  }

  // * Can use typeof === boolean (or string) to gauge whether a hit was recorded
  receiveAttack(x, y) {
    // Cell has no ship, record hit
    if (this.#board[y][x] === null) {
      this.#board[y][x] = false;
      return false;
    }
    
    if (this.#board[y][x] === false) {
      return 'Empty cell already targeted';
    }

    // Cell has ship
    if (this.#board[y][x]) {
      if (this.#board[y][x].isHit()) {
        return 'Cell with ship already targeted';
      }
      this.#board[y][x].hit(x, y);
      return true;
    }
  }

  printBoard() {
    console.log(this.#board);
  }
}