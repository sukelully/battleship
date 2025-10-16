import { Gameboard } from './gameboard';

export class Player {
    constructor(computer = false) {
        this.computer = computer;
    }

    board = new Gameboard();

    attack(opponentBoard, x, y) {
        return opponentBoard.receiveAttack(x, y);
    }

    randomAttack(opponentBoard) {
        let x, y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (opponentBoard.getCell(x, y) !== null);

        return this.attack(opponentBoard, x, y);
    }
}
