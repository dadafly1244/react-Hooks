import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //렌더링될때마다 매번 실행 -> 렌더링이후
  useEffect(() => {
    console.log('렌더링');
  });
  //마운팅 + count가 변화할때마다 실행됨
  useEffect(() => {
    console.log('count');
  }, [count]);

  //마운팅 + name가 변화할때마다 실행됨
  useEffect(() => {
    console.log('name');
  }, [name]);

  return (
    <div>
      <div>
        <button onClick={handleClick}>증가~</button>
        <span>{count}</span>
      </div>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <span>{name}</span>
      </div>
    </div>
  );
}
