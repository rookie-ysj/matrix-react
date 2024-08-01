import './index.scss'

export default function Content() {
  return (
    <div className="content">
      {getContent()}
    </div>
  )
}

function getContent() {
  const matrix = new Array(20 * 10)
  matrix.fill(0)
  console.log(matrix)
  const cells = []
  for (let i = 0; i < 20; i++) {
    const row = []
    for (let j = 0; j < 20; j++) {
      row.push(
        <div key={i + j} className="cell">
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