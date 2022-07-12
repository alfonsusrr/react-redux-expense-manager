import { configureStore } from '@reduxjs/toolkit'
import expenses from '../fixtures/expenses'
import filters from '../fixtures/filters'
import expensesReducer from '../../src/reducers/expenses'
import filtersReducer from '../../src/reducers/filters'

const preloadedState = {
    expenses,
    filters
}

const filledStore = configureStore({
    reducer: {
        expenses: expensesReducer,
        filters: filtersReducer
    },
    preloadedState
})

const emptyStore = configureStore({
    reducer: {
        expenses: expensesReducer,
        filters: filtersReducer
    }
})

export { filledStore, emptyStore }
