import React from "react"
import {connect} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {    
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state
    }
}

const mapDispatchToProps = {
    increment: increment,
    decrement: decrement
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

/*
// more on connect
// https://react-redux.js.org/api/connect#connect

function mapStateToProps(globalState) {
    // Takes the global state from Redux as a parameter
    // returns an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    
    return {
        bananas: "Hello", // accessible as props.bananas
        apple: globalState // accessible as props.apple
    }
}

const mapDispatchToProps = {
    // key = name of the prop our component will receives
    // value = action that we want to dispatch to the reducer
    
    increment: increment, // accessible as props.increment
    decrement: decrement // accessible as props.decrement
}

export default connect(
    What parts of state do you want? OR mapStateToProps,
    What actions to dispatch? or mapDispatchToProps
)(App)
*/