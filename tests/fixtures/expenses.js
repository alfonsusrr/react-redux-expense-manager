import moment from "moment"

const now = '20220715'
const date = 'YYYYMMDD'

const expenses = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 200,
    createdAt: moment(now, date).valueOf()
}, {
    id: '2',
    description: 'Household Bill',
    note: '',
    amount: 322,
    createdAt: moment(now, date).add(6, 'days').valueOf()
}, {
    id: '3',
    description: 'Internet Bill',
    note: '',
    amount: 1121,
    createdAt: moment(now, date).subtract(2, 'days').valueOf()
}, {
    id: '4',
    description: 'Credit Card',
    note: '',
    amount: 3123,
    createdAt: moment(now, date).add(4, 'days').valueOf()
}]

export default expenses