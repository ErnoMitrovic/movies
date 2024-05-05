import { SortType } from "../GridHeader/types";

// add a single word prop for active
export interface SortButtonProps {
    sortType: SortType
    setActive?: (sortType: SortType) => void
    active?: boolean
}

export const numericalSorts = ['rating', 'release']