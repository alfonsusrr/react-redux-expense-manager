import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import expensesReducer, { addExpense, removeExpense, editExpense }  from './reducers/expenses'
import filtersReducer, { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './reducers/filters'


const store = configureStore

store.dispatch(addExpense({ description: 'Water bill', amount: 45.31, createdAt: new Date().setDate(10)}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 52.22 }))
store.dispatch(addExpense({ description: 'Groceries', amount: 232 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1095.5, createdAt: new Date().setMonth(11)}))


// Wrap all components (AppRouter) with provider 
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

// Render React
const appRoot = ReactDOM.createRoot(document.getElementById('app'))
appRoot.render(jsx)