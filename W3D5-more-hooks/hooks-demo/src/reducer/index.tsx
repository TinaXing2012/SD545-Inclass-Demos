import React, { useReducer, useState } from 'react'

const initialState = 0;

/**
 * state - represent current state, 
 *  you give it reducer to be used to generate new states
 * 
 * action - an object with two properties, only 1 - type
 *      type: add, remove, edit
 *      data: e.g. a product, a number
 * @param state 
 * @param action 
 */
function reducer(state: number, action: { type: string, data?: number }) {
    console.log(state, action);
    const { type, data } = action;
    switch (type) {
        case 'INCREMENT':
            return state + data!;
        case 'DECREMENT':
            return state - data!;
        case 'RESET':
            return 0;
        default:
            return initialState;
    }
}

export default function ReducerHook() {

    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1> Count: {count}</h1>
            {/* <button onClick={() => setCount(count + 2)}>+2</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button> */}
            <button onClick={() => dispatch({type: 'INCREMENT', data: 2})}>+2</button>
            <button onClick={() => dispatch({type: 'DECREMENT', data: 1})}>-1</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    )
}
