import React, { ChangeEvent, MouseEvent, useState } from 'react';

type PersonType = {
  firstname: string,
  lastname: string,
  age: number
}

function App() {
  const p = {firstname:'qq', lastname: 'qq', age:0};

  const [person, setPerson] = useState<PersonType>({firstname:'', lastname: '', age:0});

  const [value, setValue] = useState(false);

  const [user, setUser]= useState<PersonType>( ()=> p);

  const changePerson = () => {
    // person.firstname = 'John';
    // person.lastname = 'Smith';
    // person.age = 20;
    // console.log(person); // the refernece of person isn't being changed

    // setPerson(person);

    setPerson({...person, age: 10, firstname: 'hello'});
    // setValue(124);
    
  }

  const [inputValue, setInputValue] = useState('');
  const handleInputBtn = () => {
    console.log(inputValue);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  return (
    <div>
      <ul>
        <li>{person.firstname}</li>
        <li>{person.lastname}</li>
        <li>{person.age}</li>
      </ul>

      <button onClick={changePerson}>Change Person</button>

      <input onChange={handleChange}/> <button onClick={handleInputBtn}>getInput</button>
    </div>
  );
}


export default App;

