import React from "react";
import { connect } from 'react-redux';
import filters from "../reducers/filters";
import getVisibleExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

// Regular component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {   
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                getVisibleExpenses(props.expenses, props.filters).map((expense) => {
                    return <ExpenseListItem expense={expense} key={expense.id}/>
                })
            )
        }
    </div>
)

// High order component using mapping from state to props
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)
