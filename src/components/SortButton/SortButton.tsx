import React from 'react'
import { SortButtonProps, numericalSorts } from './types'
import { ReactComponent as Alphabetical } from '../../assets/svg/Alphabetical.svg'
import { ReactComponent as Numerical } from '../../assets/svg/Numerical.svg'
import classNames from 'classnames'

const SortButton: React.FC<SortButtonProps> = ({ sortType, active, setActive }) => {
    const generalStyle = classNames('flex transition-all rounded-md drop-shadow border-r border-b border-black flex-row items-center justify-between my-1 md:pr-4 md:pl-4 md:mr-4 md:ml-4 py-2 px-2', {
        'text-black bg-green-500 hover:bg-green-600': active,
        'text-white bg-red-600 hover:bg-red-800': !active
    })

    const imgClass = classNames('w-3 ml-3', {
        'text-black': active,
        'text-white': !active
    })

    const handleClick = () => {
        if (!active) {
            setActive && setActive(sortType)
        } else {
            setActive && setActive('')
        }
    }

    return (
        <button type='button' className={generalStyle} onClick={handleClick}>
            <p className='text-sm'>Sort by {sortType}</p>
            {
                numericalSorts.includes(sortType) ?
                    <Numerical className={imgClass} /> :
                    <Alphabetical className={imgClass} />
            }
        </button>
    )
}

export default SortButton