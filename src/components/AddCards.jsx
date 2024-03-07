import { useState } from "react";
import Button from "./UI/button/Button";
import { FiPlus } from "react-icons/fi";
import Form from "./UI/form/Form";
import { motion } from "framer-motion"

const AddCards = ({column, setCards}) => {
  
  const [adding, setAdding] = useState(false)
  const [text, setText] = useState('')

  const addCard = (newCard) => {
    setCards((card) => [...card, newCard])
  }

  return (
    <>
      {adding 
      ? <Form
          addCard={addCard}
          setCards={setCards}
          text={text} 
          setText={setText}
          setAdding={setAdding}
          column={column} 
        >
        <div className="mt-1.5 flex items-center justify-end gap-1.5">
        <button
          type="submit"
          className="
          flex items-center gap-1.5 
          rounded bg-neutral-50 px-3 py-1.5 
          text-xs text-neutral-950 transition-colors 
          hover:bg-neutral-300"
        >
          <span>Add</span>
          <FiPlus />
        </button>
          <Button 
            onClick={() => setAdding(false)}
          >
            Close
          </Button>
        </div>
      </Form>
      : <Button 
        onClick={() => setAdding(true)}>
          {
            <>
            <span>Add card</span>
            <FiPlus />
            </>
          }
        </Button>
      }
    </>
  )
};

export default AddCards
