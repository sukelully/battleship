import { Player } from '../src/models/player';

test('Initialise players, sink ship', () => {
    const player1 = new Player();
    const player2 = new Player(true);
    player1.board.placeShip(0, 0, 2);
    player2.board.placeShip(0, 0, 2);

    player1.attack(player2.board, 0, 0);
    expect(player2.board.isFleetSunk()).toBeFalsy();
    player1.attack(player2.board, 1, 0);
});

test('Random computer attack', () => {
    const player1 = new Player();
    const player2 = new Player(true);

    expect(
        player1.board
            .getBoard()
            .flat()
            .every((cell) => cell === null)
    ).toBeTruthy();
    player2.randomAttack(player1.board);
    expect(
        player1.board
            .getBoard()
            .flat()
            .every((cell) => cell === null)
    ).toBeFalsy();
});
