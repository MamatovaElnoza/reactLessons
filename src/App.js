import React from 'react';
import './App.css'

const Header = () => {
  const text = 'Hello, Elnoza'

  const getText = (text) => {
    return (
      <div>
      <h1>Hello, {text}</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
    )
  }
  return<div>{getText('Sammi')}</div>
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
