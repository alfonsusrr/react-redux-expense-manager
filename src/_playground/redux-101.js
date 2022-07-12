import { createStore } from 'redux'

// Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

// 1. Reducers are pure functions: return output that depends only on the input and don't affect 
// variables outside of its scope. (state, action) => newState
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = action.incrementBy
            return { count: state.count + increment}
        case 'DECREMENT':
            const decrement = action.decrementBy
            return { count: state.count - decrement}
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return { count: 0}
        default: 
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(incrementCount({ incrementBy: 19 }))
store.dispatch(decrementCount({ decrementBy: 11 }))
store.dispatch(resetCount())
store.dispatch(setCount({ count: 101 }))