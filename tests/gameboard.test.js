import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

test('Place ship horizontally', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);
  expect(gb.getCell(0, 0)).toBeTruthy();
  expect(gb.getCell(0, 1)).toBeTruthy();
  expect(gb.getCell(0, 2)).toBeFalsy();
});

test('Place ship vertically', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2, true);
  expect(gb.getCell(0, 0)).toBeTruthy();
  expect(gb.getCell(1, 0)).toBeTruthy();
  expect(gb.getCell(2, 0)).toBeFalsy();
});