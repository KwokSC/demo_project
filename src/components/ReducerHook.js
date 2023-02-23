import {useReducer} from 'react';

// Update the state
function reducer(currentState, action){
    switch(action){
        case 'decrement':
            return {count: currentState.count - 1}
        case 'increment':
            return {count: currentState.count + 1}
        default:
            return {count: currentState}
    }
}

// useReducer is used to manage complex states
// For example, if mutiple states are related, we can use useReducer to create state objects
//
export default function ReducerHook(){
    let [state, dispatcher] = useReducer(reducer, {count: 0})

    function decrementHandler(){
        dispatcher('decrement')
    }

    function incrementHandler(){
        dispatcher('increment')
    }

    return(
        <div>
            <button onClick={decrementHandler}> - </button>
            <span>{state.count}</span>
            <button onClick={incrementHandler}> + </button>
        </div>
    )
}