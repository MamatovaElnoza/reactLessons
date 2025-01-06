import React from 'react';
import './App.css'

const Header = () => {
  const text = 'Hello, Elnoza'
  return <h1>{text}</h1>
}

const Field =() => {
  const inputType = 'text'
  const placeholder = 'Typing...'
  return <input type={inputType} placeholder={placeholder} />
}

const Button = () => {
  const user = false
  const login = 'login'
  return <button>{user ? 'logout' : login}</button>
}

function App() {
  return (
    <div className='App'>
      <Header />
      <Field />
      <Button />
    </div>
  );
}

export default App;
