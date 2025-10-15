export class Ship {
  #hits = 0;
  #isHit = false;

  constructor(length) {
    this.length = length;
  }

  hit() {
    this.#isHit = true;
    this.#hits++;
  }

  isSunk() {
    if (this.#hits === this.length) return true;
    return false;
  }

  isHit() {
    return this.#isHit;
  }
}