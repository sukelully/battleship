import { Ship } from './ship';

export class Gameboard {
    #size = 10;
    #board = Array.from({ length: this.#size }, () =>
        Array(this.#size).fill(null)
    );
    #ships = [];

    getCell(x, y) {
        return this.#board[y][x];
    }

    placeShip(x, y, length, isVertical = false) {
        if (
            (isVertical && y + length > this.#size) ||
            (!isVertical && x + length > this.#size)
        )
            return 'Error: Ship out of bounds';

        const ship = new Ship(length);
        this.#ships.push(ship);

        for (let i = 0; i < length; i++) {
            if (isVertical) {
                this.#board[y + i][x] = ship;
            } else {
                this.#board[y][x + i] = ship;
            }
        }
    }

    receiveAttack(x, y) {
        const cell = this.#board[y][x];

        // Already targeted
        if (cell === true || cell === false) {
            return 'Cell already targeted';
        }

        // Miss
        if (cell === null) {
            this.#board[y][x] = false;
            return false;
        }

        // Hit
        if (cell instanceof Ship) {
            cell.hit();
            this.#board[y][x] = true;
            return true;
        }
    }

    isFleetSunk() {
        return this.#ships.every((ship) => ship.isSunk());
    }

    getBoard() {
        return this.#board;
    }
}
