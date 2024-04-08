import React, { useState } from 'react'
const defaultUserList = [
  {
    id: 1,
    name: 'John',
    age: 19
  },
  {
    id: 2,
    name: 'Smith',
    age: 20
  },
  {
    id: 3,
    name: 'Edward',
    age: 29
  }
]

export default function App() {
  const [users, setUsers] = useState(defaultUserList);

  const add = () => {
    setUsers([{id: 4, name: 'JJ', age: 2}, ...users]);
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>{user.name}, {user.age} <input /></li>
        ))}
      </ul>
      <button onClick={add}>Add a new Person</button>
    </div>
  )
}
