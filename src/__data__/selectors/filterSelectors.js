import { createSelector } from 'reselect';

const getFilters = (state) => state.filters

export const getSortings = createSelector(getFilters, (filters) => filters.sortings)