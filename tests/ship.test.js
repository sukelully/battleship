import { Ship } from "../src/ship";

test('Creates a ship with a given length', () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});