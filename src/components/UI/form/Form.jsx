import { useState } from "react";

const Form = ( {children, ...props }) => {
  const [text, setText] = useState('')

  return (
    <form >
      <textarea
        onChange={(e) => setText(e.target.value)}
        autoFocus
        placeholder="Add new task..."
        className="
          w-full rounded border border-violet-400 
          bg-violet-400/20 p-3 text-sm text-neutral-50 
          placeholder-violet-300 focus:outline-0"
        />
        {children}
    </form>
  )
};

export default Form
