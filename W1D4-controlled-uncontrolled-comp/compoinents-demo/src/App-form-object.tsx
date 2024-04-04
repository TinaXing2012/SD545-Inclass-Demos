import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

type Person = {
  username: string,
  password: string,
  age: number
}

function App() {
  const [person, setPerson] = useState<Person>({username: '', password: '', age: 0});

  const {username, password, age} = person;

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({...person, [e.target.name]: e.target.value});
  }


  const login = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username === 'john' && password === '123') {
      console.log('success');
    } else {
      console.log('Fail');
    }
  }

  return (
    <div>
      <form>
        Username: <input name="username" value={username} onChange={handleFormChange} />
        Password: <input name="password" type="password" value={password} onChange={handleFormChange} />
        age: <input name="age" type="number" value={age} onChange={handleFormChange}/>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}

export default App;
