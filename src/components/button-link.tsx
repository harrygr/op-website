import * as React from 'react'

interface Props {
  href: string
  children: JSX.Element | string
}

export default function ButtonLink(props: Props) {
  return (
    <a
    className={`dib link pv2 ph3 b--moon-gray dark-gray br1 ba
    serif f7 ttu sans-serif bg-white hover-bg-light-gray bg-animate`}
    href={props.href}
    >
      {props.children}
    </a>
  )
}
