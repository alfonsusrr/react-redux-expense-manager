import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const EditExpensePage = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    let params = useParams()
    console.log(searchParams.get('query'))
    console.log(params)
    return (
        <div>
            This is from edit expense component
        </div>
    )
}

export default EditExpensePage