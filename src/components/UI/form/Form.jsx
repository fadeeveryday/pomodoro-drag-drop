import { motion } from "framer-motion"

const Form = ( {children, text, setText, addCard, setAdding, column, onKeyDown } ) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!text.trim().length) return

    const newCard = {
      column,
      title: text,
      id: Math.random().toString(),
    }

    addCard(newCard)
    setAdding(false)
  }

  return (
    <motion.form layout onSubmit={handleSubmit}>
      <textarea
        onChange={(e) => setText(e.target.value)}
        autoFocus
        placeholder="Add new task..."
        className="
          w-full rounded border border-violet-400 
          bg-violet-400/20 p-3 text-sm text-neutral-50 
          placeholder-violet-300 focus:outline-0"
        onKeyDown={onKeyDown}
        />
        {children}
    </motion.form>
  )
};

export default Form
