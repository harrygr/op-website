import * as React from 'react'

interface Props {
  children: React.ReactNode
}

export default function page({ children }: Props) {
  return <div className="ph4 pt2 mt5-ns mw8-5 center">{children}</div>
}