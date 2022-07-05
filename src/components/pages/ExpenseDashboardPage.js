import React from 'react'
import ExpenseList from '../ExpenseList'
import ExpenseListFilters from '../ExpenseListFilters'

const AddExpensePage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)

export default AddExpensePage