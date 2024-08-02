import './assets/css/main.scss'
import Operate from './components/operate/operate.tsx';
import Content from './components/content/content.tsx';

function App() {
  return (
    <div className="tetris"  style={{display: 'none'}}>
      <Content/>
      <Operate/>
    </div>
  )
}

export default App
