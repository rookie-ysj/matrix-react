import { MatrixData } from './constant.ts';

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
  }

  public fall() {
    this.y = this.y + 1
  }

  public left() {
    this.x = this.x - 1
  }

  public right() {
    this.x = this.x + 1
  }
}