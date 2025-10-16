import { convertToCoordinates } from '../src/utils';

test('Convert array index to XY coordinates', () => {
  expect(convertToCoordinates(0)).toEqual({ x: 0, y: 0 });
  expect(convertToCoordinates(99)).toEqual({ x: 9, y: 9 });

  let error = convertToCoordinates(-1);
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('Index out of bounds');

  error = convertToCoordinates(100);
  expect(error).toBeInstanceOf(Error);
  expect(error.message).toBe('Index out of bounds');
});
