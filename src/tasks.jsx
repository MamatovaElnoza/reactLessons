import React, { useState, useEffect, useCallback } from 'react';

const Tasks = () => {

    useEffect(() => {
    console.log('Mounted');
    },[])

    useEffect(() => {
      console.log('unMounted');
    })
    

  const [text, setText] = useState('');

  useEffect(() => {
    document.title = text;
  }, [text]);
  const changer = (e) => {
    setText(e.target.value)
  };


  const [count, setCount] = useState(0)
  
  const handler = useCallback(() => {
    setCount(prevState=>prevState+1)
    console.log('button clicked');
  }, [])


  return (
    <div className='container'>
      <h1>write title: {count}</h1>
      <input type="text" value={text} onChange={changer} placeholder="writeee" className='form-control w-50'/>
      <button onClick={handler} className='btn btn-info my-3'>+</button>
    </div>
  );
};

export default Tasks;
