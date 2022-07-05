import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersReducerDefaultState,
    reducers: {
        setTextFilter: {
            reducer: (state, action) => {
                state.text = action.payload
            },
            prepare: (text) => ({
                payload: text
            })
        },
        sortByDate: {
            reducer: (state, action) => {
                state.sortBy = 'date'
                return state
            },
        },
        sortByAmount: {
            reducer: (state, action) => {
                state.sortBy = 'amount'
                return state
            },
        },
        setStartDate: {
            reducer: (state, action) => {
                state.startDate = action.payload
            },
            prepare: (startDate) => ({
                payload: startDate
            })
        },
        setEndDate: {
            reducer: (state, action) => {
                state.endDate = action.payload
            },
            prepare: (endDate) => ({
                payload: endDate
            })
        },
    }
})

export const { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } = filtersSlice.actions
export default filtersSlice.reducer