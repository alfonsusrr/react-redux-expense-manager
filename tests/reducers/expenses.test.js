import expensesReducer, { addExpense, editExpense, removeExpense } from "../../src/reducers/expenses";
import expenses from '../fixtures/expenses'
import moment from 'moment'

const newExpense = {
    description: 'Tuition Fee',
    amount: 10000,
    note: 'Due the end of month',
    createdAt: moment().valueOf()
}

describe('Expenses reducer test', () => {
    test('Should return default expenses state', () => {
        const state = expensesReducer(undefined, '@@init')
    
        expect(state).toEqual([])
    })

    test('Should add new expenses', () => {
        const prevState = expensesReducer(undefined, addExpense({...expenses[0]}))
        const expenseOne = { ...expenses[0], id: prevState[0].id}
        expect(prevState).toEqual([expenseOne])
        
        const state = expensesReducer(prevState, addExpense({...expenses[1]}))
        const expenseTwo = { ...expenses[1], id: state[1].id}
        expect(state).toEqual([expenseOne, expenseTwo])
    })

    test('Should remove an expense', () => {
        const state = expensesReducer(expenses, removeExpense({ id: '1' }))
        expect(state).toEqual(expenses.slice(1))
    })

    test('Should edit an expense', () => {
        const state = expensesReducer(expenses, editExpense({ id: '1', updates: newExpense}))
        
        const expenseNow = expenses.slice()
        const updates = {...expenses[0], ...newExpense}
        expenseNow.splice(0, 1, updates)

        expect(state).toEqual(expenseNow)
    })

    test('Should not remove expenses if id not found', () => {
        const state = expensesReducer(expenses, removeExpense({ id: '-1' }))

        expect(state).toEqual(expenses)
    })

    test('Should not edit expenses if id not found', () => {
        const state = expensesReducer(expenses, editExpense({ id: '-1', updates: newExpense }))
        
        expect(state).toEqual(expenses)
    })
});