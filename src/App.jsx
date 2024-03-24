import './App.css'
import Board from './components/pages/Board'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pomodoro from './components/pages/Pomodoro';
import Button from './components/UI/button/Button';
import Timer from './components/Timer';
import { useState } from 'react';
import NavigateButton from './components/UI/button/NavigateButton';

function App() {
  const [tab, setTab] = useState("TODO")

  return (
  <div className="h-screen w-full bg-neutral-900 text-neutral-50 overflow-hidden">
    <BrowserRouter>
      <div className='
      fixed
      flex justify-start h-10 
      w-full bg-neutral-900 text-neutral-50 
      [&>*:nth-child(3)]:ml-auto'>
        <NavigateButton className={`${tab === "Pomodoro" ? "text-neutral-50": null}`}>
          <Link onClick={() => setTab("Pomodoro")} to={"/pomodoro"}>Pomodoro</Link>  
        </NavigateButton>
        <NavigateButton className={`${tab === "TODO" ? "text-neutral-50": null}`}>
          <Link onClick={() => setTab("TODO")} to={"/"}>TODO</Link>
        </NavigateButton>
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
