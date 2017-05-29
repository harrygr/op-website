import * as React from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function page({ children }: Props) {
  return <div className="ph4 mt5-ns mw8-5 center">{children}</div>
}