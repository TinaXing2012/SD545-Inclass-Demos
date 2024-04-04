import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
        Username: <input value={username} onChange={handleChangeUsername} />
        Password: <input value={password} onChange={handleChangePassword} />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}

export default App;
