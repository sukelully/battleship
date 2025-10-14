import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

test('Empty board is falsy', () => {
  const gb = new Gameboard();
  expect(gb.board[0][0]).toBeFalsy();
  expect(gb.board[5][5]).toBeFalsy();
})

test('Place ship horizontally', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);
  expect(gb.board[0][0]).toBeTruthy();
  expect(gb.board[0][1]).toBeTruthy();
  expect(gb.board[0][2]).toBeFalsy();
});

test('Place ship vertically', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2, true);
  expect(gb.board[0][0]).toBeTruthy();
  expect(gb.board[1][0]).toBeTruthy();
  expect(gb.board[3][0]).toBeFalsy();
});