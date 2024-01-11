import React from 'react'

const Button = ({children,onclick,className}) => {
  return (
    <div onClick={onclick}>
    <button className={`mx-2  text-white px-2 rounded font-semibold text-2xl bg-blue-300 ${className}`} 
    
    >
        {children}
    </button>

    </div>
  )
}

export default Button
