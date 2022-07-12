import moment from "moment"

const now = '20220715'
const date = 'YYYYMMDD'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(now, date).startOf('month').valueOf(),
    endDate: moment(now, date).endOf('month').valueOf()
}

export default filters