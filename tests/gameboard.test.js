import { Gameboard } from "../src/gameboard";

test('Place ship horizontally', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);

  expect(gb.getCell(0, 0)).toBeTruthy();
  expect(gb.getCell(1, 0)).toBeTruthy();
  expect(gb.getCell(2, 0)).toBeFalsy();
});

test('Place ship vertically', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2, true);

  expect(gb.getCell(0, 0)).toBeTruthy();
  expect(gb.getCell(0, 1)).toBeTruthy();
  expect(gb.getCell(0, 2)).toBeFalsy();
});

test('Place ship out of bounds', () => {
  const gb = new Gameboard();

  expect(gb.placeShip(9, 9, 5)).toBe('Error: Ship out of bounds');
  expect(gb.placeShip(9, 9, 1)).toBeUndefined();  // Ship placed successfully
});

test('Receive attack', () => {
  const gb = new Gameboard();
  gb.placeShip(5, 5, 2);

  expect(gb.receiveAttack(5, 5)).toBeTruthy();
  expect(gb.receiveAttack(6, 5)).toBeTruthy();
  expect(gb.receiveAttack(5, 5)).toBe('Cell already targeted');
});

test('Missed shots are tracked', () => {
  const gb = new Gameboard();

  expect(gb.receiveAttack(6, 9)).toBeFalsy();
  expect(gb.receiveAttack(6, 9)).toBe('Cell already targeted');
});

test('Ship instances are identical', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);

  expect(gb.getCell(0, 0)).toStrictEqual(gb.getCell(1, 0));
});

test('Sink a ship', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);

  gb.receiveAttack(0, 0);
  expect(gb.isFleetSunk()).toBeFalsy();
  gb.receiveAttack(1, 0);
  expect(gb.isFleetSunk()).toBeTruthy();
});


test('Sink multiple ships', () => {
  const gb = new Gameboard();
  gb.placeShip(0, 0, 2);
  gb.placeShip(5, 5, 3, true);
  
  gb.receiveAttack(0, 0);
  gb.receiveAttack(1, 0);
  expect(gb.isFleetSunk()).toBeFalsy();

  gb.receiveAttack(5, 5);
  gb.receiveAttack(5, 6);
  gb.receiveAttack(5, 7);
  expect(gb.isFleetSunk()).toBeTruthy();
});