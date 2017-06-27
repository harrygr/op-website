import * as React from 'react'

interface Props {
  title: string
  className?: string
}

export default function Divider({title, className = ''}: Props) {
  return (
    <div className={`relative tc ${className}`}>
      <hr className="bb br-0 bl-0 bt-0 b--black absolute mta mba w-100" />
      <span className="center bg-white ph3 relative ttu sans-serif fw4 tracked-mega f7">{title}</span>
    </div>
  )
}