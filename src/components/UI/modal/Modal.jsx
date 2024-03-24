import { useState } from "react";

const Modal = () => {

  const [workTime, setWorkTime] = useState(45)
  const [smallRestTime, setSmallRestTime] = useState(10)
  const [bigRestTime, setBigRestTime] = useState(30)

  const [currentPerRound, setCurrentPerRound] = useState(3)
  const [currentPerDay, setCurrentPerDay] = useState(6)

  return (
    <div className="
      fixed w-80 h-5/6 rounded-l-lg 
      top-12 right-0 border-neutral-500 
      bg-neutral-500/20 text-neutral-500">
      <ul className="p-4">
        <li className="flex justify-between">
          <span className="mt-auto mb-auto">Time of work</span>
          <div>
            <button className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setWorkTime(workTime - 1)}
              >
                -
            </button>
            <input
              className="w-20 rounded outline-none pl-3 text-white"
              disabled
              type="text" 
              datatype="number"
              value={`${workTime} min`}
              onChange={(event) => setWorkTime(event.target.value)}/>
            <button
              className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setWorkTime(workTime + 1)}
              >
                +
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <span className="mt-auto mb-auto">Time of small rest</span>
          <div>
            <button className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setSmallRestTime(smallRestTime - 1)}
              >
                -
            </button>
            <input
              className="w-20 rounded outline-none pl-3 text-white"
              disabled
              type="text" 
              datatype="number"
              value={`${smallRestTime} min`}
              onChange={(event) => setSmallRestTime(event.target.value)}/>
            <button
              className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setSmallRestTime(smallRestTime + 1)}
              >
                +
            </button>
          </div>
        </li>
        <li className="flex justify-between mb-10">
          <span className="mt-auto mb-auto">Time of big rest</span>
          <div>
            <button className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setBigRestTime(bigRestTime - 1)}
              >
                -
            </button>
            <input
              className="w-20 rounded outline-none pl-3 text-white"
              disabled
              type="text" 
              datatype="number"
              value={`${bigRestTime} min`}
              onChange={(event) => setBigRestTime(event.target.value)}/>
            <button
              className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setBigRestTime(bigRestTime + 1)}
              >
                +
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <span className="mt-auto mb-auto">Pomodoro per round</span>
          <div>
            <button className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setCurrentPerRound(currentPerRound - 1)}
              >
                -
            </button>
            <input
              className="w-20 rounded outline-none pl-8 text-white"
              disabled
              type="text" 
              datatype="number"
              value={currentPerRound}
              onChange={(event) => setCurrentPerRound(event.target.value)}/>
            <button
              className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setCurrentPerRound(currentPerRound + 1)}
              >
                +
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <span className="mt-auto mb-auto">Goal for a day</span>
          <div>
            <button className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setCurrentPerDay(currentPerDay - 1)}
              >
                -
            </button>
            <input
              className="w-20 rounded outline-none text-white pl-8"
              disabled
              type="text" 
              datatype="number"
              value={currentPerDay}
              onChange={(event) => setCurrentPerDay(event.target.value)}/>
            <button
              className="
              p-2 text-l text-neutral-400 
              transition-colors hover:text-neutral-50"
              onClick={() => setCurrentPerDay(currentPerDay + 1)}
              >
                +
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Modal
