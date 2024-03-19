import './App.css'
import Board from './components/pages/Board'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pomodoro from './components/pages/Pomodoro';
import Button from './components/UI/button/Button';
import Timer from './components/Timer';

function App() {

  return (
  <div className="h-screen w-full bg-neutral-900 text-neutral-50">
    <BrowserRouter>
      <div className='
      fixed
      flex justify-start h-10 
      w-full bg-neutral-900 text-neutral-50 
      [&>*:nth-child(3)]:ml-auto'>
        <Button>
          <Link to={"/pomodoro"}>Pomodoro</Link>
        </Button>
        <Button>
          <Link to={"/"}>TODO</Link>
        </Button>
        <Timer />
      </div>
      <Routes>
        {/* <Route path="*" element={<Board />} /> */}
        <Route path="/" element={<Board />} />
        <Route path="pomodoro" element={<Pomodoro />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
