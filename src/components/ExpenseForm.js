import React from "react";
import moment from 'moment'
import DatePicker from 'react-date-picker'

const now = moment()
class ExpenseForm extends React.Component {
    state = this.props.expense ? {
        description: this.props.expense.description, 
        note: this.props.expense.note, 
        amount: this.props.expense.amount, 
        createdAt: moment(new Date(this.props.expense.createdAt)), 
        error: ''
    } : {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        error: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (date, e) => {
        if (date) {
            this.setState(() => ({ createdAt: moment(date)}))
        } else {
            this.setState(() => ({ createdAt: moment(new Date())}))
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {!!this.state.error ? <p>{this.state.error}</p> : undefined}
                    <input
                        data-testid="description"
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>
                    <input
                        type="text"
                        data-testid="amount"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    ></input>
                    <DatePicker
                        data-testid="created-at"
                        value={this.state.createdAt.toDate()}
                        onChange={this.onDateChange}
                    />
                    <textarea
                        data-testid="note"
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    ></textarea>
                    <button data-testid="submit" >{this.props.action} Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm