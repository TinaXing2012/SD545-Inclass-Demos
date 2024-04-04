import { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from "react";

function App() {

  const [person, setPerson] = useState({username: '', password: ''});

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const {username, password}  = person;


  const login = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;
    setPerson({...person, username, password});
    if (username === 'john' && password === '123') {
      console.log('success');
    } else {
      console.log('fail');
    }
  }

  return (
    <div>
      Hello, {username} {password}
      <form>
        username: <input ref={usernameRef} />
        password: <input ref={passwordRef} />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}

export default App;
