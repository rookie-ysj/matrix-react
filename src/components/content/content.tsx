import './index.scss'
import { useCustomDispatch, useCustomSelector } from '../../hooks/useStore.ts';
import { MatrixData } from '../../utils/constant.ts';
import { Block } from '../../utils/block.ts';
import { gameOver, mergeMatrixAndBlock } from '../../utils/globalFunction.ts';
import { useEffect, useState } from 'react';
import { resetCurBlock, setCurBlockY } from '../../store/currentBlock.ts';
import { setMatrix } from '../../store/matrix.ts';
import { setTimer } from "../../store/timer.ts";

export default function Content() {
  const matrix = useCustomSelector(state => state.matrix)
  const curBlock = useCustomSelector(state => state.currentBlock)
  const dispatch = useCustomDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      if (curBlock.block.canFail(matrix.data)) {
        dispatch(setCurBlockY(curBlock.block.fall()))
        setCount(count => count + 1)
      } else {
        dispatch(setMatrix(mergeMatrixAndBlock(matrix.data, curBlock.block)))
        dispatch(resetCurBlock())
        if (gameOver(matrix.data)) {
          alert('game over!')
        } else {
          setCount(count => count + 1)
        }
      }
    }, 100)
    dispatch(setTimer(t))
  }, [count]);
  return (
    <div className="content">
      {getContent(matrix.data, curBlock.block)}
    </div>
  )
}

function getContent(matrix: MatrixData[][], block: Block) {
  const cells = []
  const result = mergeMatrixAndBlock(matrix, block)
  for (let i = 0; i < result.length; i++) {
    const row = []
    for (let j = 0; j < result[i].length; j++) {
      row.push(
        <div key={i + j} className={'cell ' + (result[i][j] === MatrixData.FULL ? 'full-cell' : '')}>
          <div className="cell-content"></div>
        </div>
      )
    }
    cells.push(row)
  }
  return (
    cells.map((cell, index) => <div className="row" key={index}>{cell}</div>)
  )
}