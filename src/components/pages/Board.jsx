import { useState } from "react";
import Column from "../Column";
import Delete from "../Delete";
import Navigate from "../Navigate";

const Board = () => {
  const [cards, setCards] = useState([])

  return (
    <div className="flex h-full w-full gap-5 pt-12 justify-center overflow-scroll">
      <Column
       title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <Delete setCards={setCards}/>
    </div>
  )
};

export default Board
