import { Ship } from '../src/models/ship'

test('Creates a ship with a given length', () => {
    const ship = new Ship(3)
    expect(ship.length).toBe(3)
})

test('Sink a ship', () => {
    const ship = new Ship(2)
    ship.hit()
    expect(ship.isSunk()).toBeFalsy()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
})
