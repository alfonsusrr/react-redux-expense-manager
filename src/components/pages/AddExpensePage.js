import React from 'react'
import ExpenseForm from '../ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../../reducers/expenses'
import { useNavigate } from 'react-router-dom'

const AddExpensePage = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <ExpenseForm
                action="Add"
                onSubmit={(expense) => {
                    props.dispatch(addExpense({ ...expense }))
                    navigate('/')
                }}
            />
        </div>
    )
}

export default connect()(AddExpensePage)