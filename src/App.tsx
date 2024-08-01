import { useState } from 'react'
import './assets/css/main.scss'
import Operate from './components/operate/operate.tsx';
import Content from './components/content/content.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="tetris">
      <Content/>
      <Operate/>
    </div>
  )
}

export default App
