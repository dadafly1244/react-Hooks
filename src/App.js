import React, { useState, useEffect } from 'react';
import './style.css';
import Timer from './components/Timer';

export default function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
