import { useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCards from "./AddCards";


const Column = ({title, headingColor, column, cards, setCards}) => {
  const [active, setActive] = useState(true)
  const filteredCards = cards.filter((c) => c.column === column);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("cardId", id)
    console.log(event.dataTransfer.setData("cardId", id))
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    highlightIndicator(event)
    setActive(true)
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    setActive(false)
    clearHighLights()
  }

  const highlightIndicator = (event) => {
    const indicators = getIndicators()
    clearHighLights()
    const el = getNearestindicator(event, indicators)
    el.element.style.opacity = "1"
  }

  const handleDragEnd = (event) => {
    const cardId = event.dataTransfer.getData("cardId")
    
    setActive(false)
    clearHighLights()

    const indicators = getIndicators()
    const { element } = getNearestindicator(event, indicators)

    const before = element.dataset.before || "-1"
    // console.log(cardId)
    if (before !== cardId) {
      let copyCard = [...cards]

      let cardToTransfer = copyCard.find((c) => c.id === cardId)

      if(!cardToTransfer) return

      cardToTransfer = {...cardToTransfer, column}

      copyCard = copyCard.filter((c) => c.id !== cardId)

      const moveToBack = before === "-1"

      if (moveToBack) {
        copyCard.push(cardToTransfer)
      } else {
        const insertIndex = copyCard.findIndex((el) => el.id === before)

        if (insertIndex === undefined) return

        copyCard.splice(insertIndex, 0, cardToTransfer)
      }
      setCards(copyCard)
    }
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  }
  
  const clearHighLights = (elmns) => {
    const indicators = elmns || getIndicators()

    indicators.forEach((i) => {
      i.style.opacity = "0"
    })
  }

  const getNearestindicator = (event, indicators) => {
    const DISTANSE_OFFSET = 50
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = event.clientY - (box.top + DISTANSE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    )
    return el
  }

  return (
    <div 
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        { filteredCards.map((card) => {
          return <Card key={card.id} {...card} handleDragStart={handleDragStart}/> 
        })}
        <DropIndicator beforeId="-1" column={column}/>
        <AddCards column={column} setCards={setCards} />
      </div>
    </div>
  )
};

export default Column

