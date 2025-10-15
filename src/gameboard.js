import { Ship } from "./ship";

export class Gameboard {
  #size = 10;
  #board = Array.from({ length: this.#size }, () => Array(this.#size).fill(null));

  getCell(x, y) {
    return this.#board[x][y];
  }

  // TODO: Account for out of bounds (ie, what happens if x + 1 extends passed the board)
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
    // No ship, no hits
    if (this.#board[y][x] === null) {
      this.#board[y][x] = false;
      return false;
    }

    if (this.#board[y][x] === false) {
      return 'Empty cell already targeted';
    }

    if (this.#board[y][x]) {
      if (this.#board[y][x].isHit());
      return 'Cell with ship already targeted';
    }

    // Hit ship, return true
    if (this.#board[y][x]) {
      this.#board[y][x].hit(x, y);
      return true;
    }
  }

  printBoard() {
    console.log(this.#board);
  }
}