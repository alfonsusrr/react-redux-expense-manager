import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../reducers/expenses";
import moment from "moment";
import numeral from "numeral"

const ExpenseListItem = (props) => (
    <div>
        <h3><Link to={"/edit/" + props.expense.id}>{props.expense.description}</Link></h3>
        <p>{numeral(props.expense.amount).format('$0,0,0.00')} 
             -  
            {moment(props.expense.createdAt).format("MMMM Do YYYY")}
        </p>
    </div>
)

export default connect()(ExpenseListItem)