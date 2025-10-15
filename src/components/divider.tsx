import React from 'react'

type DividerProps = {
  className?: string;
}

const Divider = ({className}:DividerProps) => {
  return (
    <div className={`border-r-2 border-[#F1F1F1] ${className}`}></div>
  )
}

export default Divider
