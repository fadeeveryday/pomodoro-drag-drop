import { motion } from "framer-motion"

const Button = ({ children, ...props}) => {
  return (
    <motion.button layout onClick={props.onClick} className="
    flex items-center gap-1.5
    px-3 py-1.5 text-xs text-neutral-400 
    transition-colors hover:text-neutral-50">
      {children}
    </motion.button>
  )
};

export default Button
