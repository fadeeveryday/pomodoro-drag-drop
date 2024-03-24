import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../UI/button/Button";
import Counter from "../Counter";
import Modal from "../UI/modal/Modal";
const Pomodoro = () => {
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [countDownTime, setCountDownTIme] = useState({
    minutes: 59,
    seconds: 59,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const changeCircleoffset = (seconds, minutes) => {
    if (minuteCircle.current) {
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime(); // error here
    const timeDiffrence = countDownDate - currentTime;
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) { //we have unpositive value here
      changeCircleoffset(seconds, minutes);
      setCountDownTIme({
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes);
      setCountDownTIme({
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getMinutes() + 25,
      customDate.getSeconds() + 12
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="h-screen flex-col md:flex-row">
      <div className="flex pl-12 pr-12 items-center justify-center pt-14">
          <Button>
            <h1>Skip Pomodoro</h1>
          </Button>
      </div>
      <div className="flex h-4/5 flex-col md:flex-row justify-center items-center">
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={minuteCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "451px",
            }}
            className="fill-transparent stroke-white stroke-[8px]"
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.minutes}</span>
          <span className="text-center">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>
      <div className="relative">
        <svg className="-rotate-90 h-48 w-48">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[#88adf1] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            cx="90"
            cy="90"
            className=" fill-transparent stroke-white  stroke-[8px]"
            ref={secondCircle}
            style={{
              strokeDasharray: "451px",
            }}
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.seconds}</span>
          <span className="text-center">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
      {isOpenModal && <Modal />}
    </div>
      <div className="flex pl-14 pr-14 items-center justify-between pt-4">
        <Counter />
        <button
          type="submit"
          onClick={() => setIsOpenModal(!isOpenModal)}
          className="
          flex items-center gap-3 
          rounded bg-neutral-50 px-10 py-2 
          text-s text-neutral-950 transition-colors 
          hover:bg-neutral-300"
        >
          <span>Settings</span>
        </button>
      </div>
    </div>
    
  );
};
export default Pomodoro;

{/* <div className="flex pl-12 pr-12 items-center justify-between">
<h1>Pomodoro Timer</h1>
<button
  type="submit"
  id="EnterBtn"
  className="
  flex items-center gap-3 
  rounded bg-neutral-50 px-4 py-1.5 
  text-s text-neutral-950 transition-colors 
  hover:bg-neutral-300"
>
  <span>Settings</span>
</button>
</div> */}