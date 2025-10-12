export class Ship {
  #hits;
  #sunk;

  constructor(length) {
    this.length = length;
    this.#hits = Array(length).fill(false);
    this.#sunk = false;
  }

  hit(index) {
    if (index > this.length || index < 0) {
      throw new Error('Target out of ship bounds')
    }

    if (this.#hits[index]) return 'Already hit';

    this.#hits[index] = true;
  }

  isSunk() {
    if (this.#sunk) return true;

    if (this.#hits.every(Boolean)) return true;
  }
}