import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default configureStore({
    reducer: {
        expenses: expensesReducer,
        filters: filtersReducer
    }
})
