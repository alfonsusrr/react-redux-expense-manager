import filtersReducer, { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from '../../src/reducers/filters'
import configureStore from '../../src/store/configureStore'
import moment from 'moment'

describe('Filters reducer test', () => {
    test('Should return default filter values', () => {
        const state = filtersReducer(undefined, { type: '@@init'})

        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month').valueOf(),
            endDate: moment().endOf('month').valueOf()
        })
    })

    test('Should set sortBy to amount', () => {
        const state = filtersReducer(undefined, sortByAmount())

        expect(state.sortBy).toBe('amount')
    })

    test('Should set sortBy to date', () => {
        const  prevState = filtersReducer(undefined, sortByAmount())
        const state = filtersReducer(prevState, sortByDate())

        expect(state.sortBy).toBe('date')
    })

    test('Should set test filter', () => {
        const state = filtersReducer(undefined, setTextFilter('test'))

        expect(state.text).toBe('test')
    })

    test('Should set start date', () => {
        const now = moment().valueOf()
        const state = filtersReducer(undefined, setStartDate(now))

        expect(state.startDate).toEqual(now)
    })

    test('Should set end date', () => {
        const now = moment().valueOf()
        const state = filtersReducer(undefined, setEndDate(now))

        expect(state.endDate).toEqual(now)
    })
});
