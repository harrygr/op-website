import * as React from 'react'

interface Props {
  label: string
  id: string
  type?: 'text' | 'email' | 'tel' | 'number'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {}
  required?: boolean
  name: string
}

export default function input({
  label,
  id,
  type = 'text',
  onChange,
  required = false,
  name,
}: Props) {
  return (
    <div className="pb3">
      <label htmlFor={id} className="db mb1">{label}</label>
      <input
        onChange={onChange}
        id={id}
        name={name}
        type={type}
        className="input-reset ba b--black ph3 pv2 db w-100"
        required={required}
      />
    </div>
  )
}