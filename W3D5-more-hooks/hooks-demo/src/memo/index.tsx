import React, { useMemo, useState } from 'react'

function expensiveFunction(num: number) {
    console.log('exprensive....');
    for (let i = 0; i < 100000; i++) {
        num += 1;
    }
    return num;
}


export default function MemoHook() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>(['eat', 'play']);

    const addTodo = () => {
        setTodos([...todos, 'new todo']);
    }

    const incrementBy1 = () => {
        setCount(prev => prev+1);
    }

    const result = useMemo(() => expensiveFunction(count), [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p><button onClick={incrementBy1}>+1</button></p>
            <hr />
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <button onClick={addTodo}>Add Todo</button>
            <hr />
            <p>Result: {result}</p>
        </div>
    )
}
