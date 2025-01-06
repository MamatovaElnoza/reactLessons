import React from 'react';
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

  export default Header