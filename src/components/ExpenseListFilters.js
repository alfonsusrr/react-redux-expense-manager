import React from "react";
import { connect } from "react-redux";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../reducers/filters";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

class ExpenseListFilters extends React.Component {
    state = {
        startDate: new Date(this.props.filters.startDate),
        endDate: new Date(this.props.filters.endDate)
    }
    onDateFilterChange = (dates) => {
        let startDate, endDate
        if (dates) {
            [startDate, endDate] = dates
        }
        if (startDate && endDate) {
            this.props.dispatch(setStartDate(startDate.getTime()))
            this.props.dispatch(setEndDate(endDate.getTime()))
            this.setState(() => ({ startDate, endDate}))
        } else {
            this.setState(() => ({ 
                startDate: new Date(this.props.filters.startDate), 
                endDate: new Date(this.props.filters.endDate)
            }))
        }

    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                ></input>
                <select 
                    value={this.props.filters.sortBy}
                    onChange={async (e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    value={[this.state.startDate, this.state.endDate]}
                    onChange={this.onDateFilterChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)