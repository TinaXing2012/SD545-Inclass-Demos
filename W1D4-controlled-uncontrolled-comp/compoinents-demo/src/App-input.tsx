import { ChangeEvent, useState } from "react";

function App() {
  const [username, setUsername] = useState('');

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  }

  return (
    <div>
      <input value={username} onChange={handleChangeUsername} />
    </div>
  );
}

export default App;
