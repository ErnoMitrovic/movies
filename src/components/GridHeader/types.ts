export interface GridHeaderProps {
    title: string
    sortType?: SortType
    setSortType?: (sortType: SortType) => void
}

export type SortType = 'name' | 'rating' | 'release' | ''