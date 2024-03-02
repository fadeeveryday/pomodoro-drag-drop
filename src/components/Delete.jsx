import { useState } from "react";

const Delete = ({ setCard }) => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`
      mt-10 grid h-56 w-56 
      shrink-0 place-content-center 
      rounded border text-3xl`}
    >
      {/* {active ? <FaFire className="animate-bounce" /> : <FiTrash />} */}
    </div>
  )
};

export default Delete
