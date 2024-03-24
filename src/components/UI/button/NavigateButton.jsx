import { motion } from "framer-motion"

const NavigateButton = ({ children, ...props}) => {
  return (
    <motion.button layout className={`
      flex items-center gap-1.5
      px-3 py-1.5 text-xs text-neutral-400 
      transition-colors ${props.className}`}
    >
      {children}
    </motion.button>
  )
};

export default NavigateButton

// text-neutral-50