import { MatrixData, MAX_COLUMN_SIZE, MAX_ROW_SIZE } from './constant.ts';
import { type Shape, shapes } from "./shape.ts";

export class Block {
  public shape: Shape

  constructor(public x: number, public y: number) {
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  public rotate(): Shape {
    // 找到旋转中心点
    const centerX = Math.floor(this.shape[0].length / 2);
    const centerY = Math.floor(this.shape.length / 2);
    let newShape = this.shape.slice();
    newShape = this.transpose(newShape);
    newShape = this.reverse(newShape);
    // 检查新方块位置是否越界
    for (let i = 0; i < newShape.length; i++) {
      for (let j = 0; j < newShape[i].length; j++) {
        if (newShape[i][j] === 1 && (i + centerY < 0 || j + centerX < 0 || i + centerY >= shapes.length || j + centerX >= shapes[0][0].length)) {
          return this.shape;
        }
      }
    }
    this.shape = newShape;
    // 更新方块形状
    return newShape;
  }

  // 转置矩阵
  private transpose(matrix: Shape) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const row = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
      result.push(row);
    }
    return result;
  }

  // 反转矩阵
  private reverse(matrix: Shape) {
    return matrix.map(row => row.slice().reverse());
  }

  public canFail(matrix: MatrixData[][]): boolean {
    if (this.y + this.shape.length >= MAX_ROW_SIZE) {
      return false;
    }
    if (!matrix) {
      return false;
    }
    for (let r = 0; r < this.shape.length; r++) {
      for (let c = 0; c < this.shape[0].length; c++) {
        if (this.shape[r][c] === MatrixData.FULL) {
          if (matrix[this.y + r + 1][this.x + c] === MatrixData.FULL) {
            return false;
          }
        }
      }
    }
    return true;
  }

  public fall(): number {
    return this.y + 1
  }

  public left() {
    if (this.x === 0) {
      return
    }
    this.x = this.x - 1
  }

  public right() {
    if (this.x + this.shape[0].length >= MAX_COLUMN_SIZE) {
      return
    }
    this.x = this.x + 1
  }

  public down(matrix: MatrixData[][]) {
    while (this.canFail(matrix)) {
      this.fall()
    }
    return
  }
}