import { Block } from '../unit/block.ts';

export enum KeyBoardOperation {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
  DOWN = 'ArrowDown',
  ROTATE = 'ArrowUp',
  FALL = ' ', // 空格
}

export function keyDown(key: KeyboardEvent['key'], block: Block) {
  switch (key) {
    case KeyBoardOperation.LEFT:
      block.left()
      break
    case KeyBoardOperation.RIGHT:
      block.right()
      break
    case KeyBoardOperation.DOWN:
      // curBlock.block.down(matrix.data)
      break
    case KeyBoardOperation.ROTATE:
      block.rotate()
      break
  }
}