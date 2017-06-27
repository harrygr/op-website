import * as React from 'react'

interface Props {
  title: string
  className?: string
}

export default function Divider({title, className = ''}: Props) {
  return (
    <div className={`relative tc ${className}`} style={{height: '1px'}}>
      <hr className="bb br-0 bl-0 bt-0 b--black absolute ma0 w-100" />
      <span
        className="center bg-white ph3 absolute ttu sans-serif fw4 tracked-mega f7"
        style={{transform: 'translate(-50%, -50%)'}}
      >{title}</span>
    </div>
  )
}