import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion"

const Card = ({title, id, column, handleDragStart}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column}/>
      <motion.div
      layout
      layoutId={id}
      onDragStart={(event) => handleDragStart(event, id)}
      draggable="true"
      className="
      cursor-grab 
      rounded border
      border-neutral-700 
      bg-neutral-800 
      p-3 
      active:cursor-grabbing"
      >
      <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  )
};

export default Card
