import React from 'react'
import { GridHeaderProps, SortType } from './types'
import { SortButton } from '../SortButton'

const GridHeader: React.FC<GridHeaderProps> = ({ title, sortType, setSortType }) => {
    const sortTypes: SortType[] = ['name', 'rating', 'release']

    return (
        <div className='flex items-center flex-row justify-between pt-4 pb-4 mr-8 ml-8'>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <div className='flex flex-col md:flex-row'>
                {
                    sortTypes.map((sortTypeInMap) => {
                        return (
                            <SortButton key={sortTypeInMap} sortType={sortTypeInMap} active={sortTypeInMap === sortType} setActive={setSortType} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GridHeader