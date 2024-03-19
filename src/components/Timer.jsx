import { useState } from "react";

const Timer = () => {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()), 1000*60)
  return (
    <div className="
    flex items-center gap-1.5
     text-s text-neutral-400 pr-5">
      <span>
        { `${now.getHours()}:${now.getMinutes()}` }
      </span>
    </div>
  )
};

export default Timer
