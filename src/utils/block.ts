import { MatrixData, MAX_COLUMN_SIZE, MAX_ROW_SIZE } from './constant.ts';

type Shape = MatrixData[][]
export const shapes: Shape[] = [
  [
    [1, 1, 1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 1, 0,],
    [1, 1, 1,],
  ],
  [
    [0, 1, 1,],
    [1, 1, 0,],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ]
]

export class Block {
  public shape: number[][]

  constructor(public x: number, public y: number) {
    this.shape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  public rotate() {
    // todo
    console.log(this.x, this.y)
  }

  public canFail(): boolean {
    return this.y + this.shape.length < MAX_ROW_SIZE;
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
    if (this.x === MAX_COLUMN_SIZE) {
      return
    }
    this.x = this.x + 1
  }
}