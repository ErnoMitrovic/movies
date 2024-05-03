import React from 'react'
import { IPillProps } from './types'
import classNames from 'classnames'

const Pill: React.FC<IPillProps> = ({
  title,
  color
}) => {

  const pillClass = classNames({
    "text-white text-sm font-medium leading-none m-1 py-1 px-2 rounded-md": true,
    "bg-red-800": color === "red",
    "bg-green-800": color === "green",
    "bg-blue-800": color === "blue",
    "bg-yellow-800": color === "yellow",
  })

  return (
    <span className={pillClass}>{title}</span>
  )
}

export default Pill