import { Gameboard } from './gameboard';

export class Player {
    constructor(computer = false) {
        this.computer = computer;
    }

    board = new Gameboard();
}
