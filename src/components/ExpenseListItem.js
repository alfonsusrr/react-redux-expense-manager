import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeExpense } from "../reducers/expenses";
import moment from "moment";

const ExpenseListItem = (props) => (
    <div>
        <h3><Link to={"/edit/" + props.expense.id}>{props.expense.description}</Link></h3>
        <p>$ {props.expense.amount} - {moment(props.expense.createdAt).format("MMM DD YYYY")}</p>
    </div>
)

export default connect()(ExpenseListItem)