import React, { useCallback, useMemo, useState } from 'react'
import Todos from './Todos';

export default function CallbackHook() {
  console.log('inside parent - callback hook');
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useMemo(() => () => {
    setTodos([...todos, 'New Todo']);
  }, [todos]);

  const addTodo2 = useCallback(() => {
    setTodos([...todos, 'New Todo']);
  }, [todos]);

  return (
    <div>
      <p>Count: {count}</p>
      <p><button onClick={() => setCount(count + 1)}>+1</button></p>
      <hr />
      <Todos todos={todos} onAddTodo={addTodo} />
    </div>
  )
}
