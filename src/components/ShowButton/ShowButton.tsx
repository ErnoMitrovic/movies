import React from 'react'
import { ShowButtonProps } from './types'

const ShowButton: React.FC<ShowButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <button className=' h-8 text-sm flex items-center bg-red-600 p-4 text-white font-semibold rounded hover:bg-red-600' onClick={onClick}>
      {text ? text : 'View all'}
      <svg
        className="w-4 h-4 ml-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
}

export default ShowButton