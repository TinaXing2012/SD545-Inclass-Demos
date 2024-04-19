import React, { memo } from 'react'

type Props = {
  onAddTodo: () => void;
  todos: string[]
}

function Todos({ todos, onAddTodo }: Props) {
  console.log('re-render todos...');
  return (
    <div>
      {todos.map((todo, index) => <p key={index}>{todo}</p>)} 
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos);
