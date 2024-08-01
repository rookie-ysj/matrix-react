import './index.scss'
import { useCustomSelector } from '../../hooks/useStore.ts';
import { MatrixData } from '../../utils/constant.ts';
import { Block } from '../../utils/block.ts';

export default function Content() {
  const matrix = useCustomSelector(state => state.matrix)
  const ysj = new Block(0, 0)
  ysj.rotate()
  return (
    <div className="content">
      {getContent(matrix.data)}
    </div>
  )
}

function getContent(matrix: MatrixData[][]) {
  const cells = []
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(
        <div key={i + j} className={'cell ' + (matrix[i][j] === 1 ? 'full-cell' : '')}>
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