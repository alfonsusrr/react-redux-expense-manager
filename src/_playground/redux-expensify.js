import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', notes = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Reducers
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
)

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'a189shiqhs82wn',
        description: 'Tuition fee',
        note: 'Semester 2 tuition due the end of month',
        amount: 30000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', 
        startDate: undefined,
        endDate: undefined
    }
}

