import { createSelector } from 'reselect';

const getFiltersReducerState = (state) => state.filters

export const getSorting = createSelector(getFiltersReducerState, (filters) => filters.sorting)

export const getFilters = createSelector(getFiltersReducerState, (filters) => filters.filters)