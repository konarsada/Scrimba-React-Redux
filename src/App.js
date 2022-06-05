import React from "react"
import {connect, useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
    // get pieces of state from the globalState
    const count = useSelector(state => state)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default App

// export default connect(state => ({count: state}), {increment, decrement})(App)