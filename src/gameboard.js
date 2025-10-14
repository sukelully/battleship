import { Ship } from "./ship";

export class Gameboard {
  #size = 100;
  #board = Array(this.#size).fill(null);

  // Implement orientation
  placeShip(x, y, length, orientation) {
    const ship = new Ship(length);
    this.#board.splice(0, length, ship);
  }

  receiveAttack(x, y) {
    
  }
}