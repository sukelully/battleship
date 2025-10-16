export function convertToCoordinates(index) {
  const gridSize = 10;
  if (index < 0 || index >= gridSize * gridSize)
    return new Error('Index out of bounds');

  const x = index % gridSize;
  const y = Math.floor(index / gridSize);

  return { x, y };
}
