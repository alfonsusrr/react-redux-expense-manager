import expenses from "../fixtures/expenses";
import filters from '../fixtures/filters';
import getVisibleExpenses from '../../src/selectors/expenses';
import moment from "moment";

const now = moment('20220715', 'YYYYMMDD').valueOf()

describe('Selector test', () => {
    test('Should filter by text value', () => {
        const result = getVisibleExpenses(expenses, {...filters, text: 'bill'})
        
        expect(result).toEqual([expenses[1], expenses[2]])
    })

    test('Should filter by startDate', () => {
        const result = getVisibleExpenses(expenses, {...filters, startDate:now})
        expect(result).toEqual([expenses[1], expenses[3], expenses[0]])
    })

    test('Should filter by endDate', () => {
        const result = getVisibleExpenses(expenses, {...filters, endDate: now})
        expect(result).toEqual([expenses[0], expenses [2]])
    })

    test('Should sort by amount', () => {
        const result = getVisibleExpenses(expenses, {...filters, sortBy: 'amount'})
        expect(result).toEqual([expenses[3], expenses[2], expenses[1], expenses[0]])
    })

    test('Should sort by date', () => {
        const result = getVisibleExpenses(expenses, {...filters, sortBy: 'date'})
        expect(result).toEqual([expenses[1], expenses[3], expenses[0], expenses[2]])
    })
});


