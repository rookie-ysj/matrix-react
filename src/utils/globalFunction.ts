import { MatrixData, MAX_COLUMN_SIZE, MAX_ROW_SIZE } from './constant.ts';
import { Block } from './block.ts';

export function create2DArray<T extends number>(width: number, height: number): T[][] {
  const arr = new Array(height);
  for (let i = 0; i < height; i++) {
    arr[i] = new Array(width).fill(0);
  }
  return arr;
}

export function canMove(matrix: MatrixData[][], block: Block) {
  for (let r = 0; r < block.shape.length; r++) {
    for (let c = 0; c < block.shape[r].length; c++) {
      console.log(matrix)
    }
  }
  return true
}

export function mergeMatrixAndBlock(matrix: MatrixData[][], block: Block): MatrixData[][] {
  const result = create2DArray(MAX_COLUMN_SIZE, MAX_ROW_SIZE)
  for (let r = 0; r < block.shape.length; r++) {
    for (let c = 0; c < block.shape[r].length; c++) {
      if (block.shape[r][c] === MatrixData.FULL || matrix[r + block.y][c + block.x] === MatrixData.FULL) {
        result[r + block.y][c + block.x] = MatrixData.FULL
      }
    }
  }
  return result
}