import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense: {
            reducer: (state, action) => {
                state.push(action.payload)
                return state
            },
            prepare: ({ description = '', note = '', amount = 0, createdAt = (new Date()).getTime()}) => ({
                payload: {
                    id: uuid(),
                    description,
                    note,
                    amount,
                    createdAt
                }
            })
        },
        removeExpense: {
            reducer: (state, action) => {
                return state.filter((expense) => expense.id !== action.payload.id)
            },
            prepare: ({ id }) => ({
                payload: {
                    id
                }
            })
        },
        editExpense: {
            reducer: (state, action) => {
                return state.map((expense) => (expense.id === action.payload.id) ? { ...expense, ...action.payload.updates  } : expense)
            },
            prepare: ({ id, updates }) => ({
                payload: { 
                    id, 
                    updates 
                }
            })
        }   
    }
})

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions
export default expensesSlice.reducer