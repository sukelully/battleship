export function convertToCoordinates(index) {
  const gridSize = 10;

  const x = index % gridSize;
  const y = Math.floor(index / gridSize);

  return { x, y };
}
