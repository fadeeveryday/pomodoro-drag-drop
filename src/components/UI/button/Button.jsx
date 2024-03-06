

const Button = ({ children, ...props}) => {
  return (
    <button onClick={props.onClick} className="
    flex items-center gap-1.5
    px-3 py-1.5 text-xs text-neutral-400 
    transition-colors hover:text-neutral-50">
      {children}
    </button>
  )
};

export default Button
