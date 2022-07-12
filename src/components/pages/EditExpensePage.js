import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ExpenseForm from '../ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../reducers/expenses'

const EditExpensePage = (props) => {
    // let [searchParams, setSearchParams] = useSearchParams()
    const id = useParams().id
    const navigate = useNavigate()
    const expense = props.expenses.find((expense) => expense.id === id)
    return (
        <div>
            <ExpenseForm 
                expense={expense}
                action="Edit"
                onSubmit={(updatedExpense) => {
                    props.dispatch(editExpense({ id, updates: {...updatedExpense}}))
                    navigate('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id }))
                navigate('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage)