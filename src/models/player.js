import { Gameboard } from './gameboard'

export class Player {
    constructor(name, computer = false) {
        this.name = name
        this.computer = computer
    }

    board = new Gameboard()
}
