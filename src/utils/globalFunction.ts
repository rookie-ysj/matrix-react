export function create2DArray<T extends number>(width: number, height: number): T[][] {
  const arr = new Array(height);
  for (let i = 0; i < height; i++) {
    arr[i] = new Array(width).fill(0);
  }
  return arr;
}