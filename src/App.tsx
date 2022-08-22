import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

const lastDay = new Date(2022, 9, 26, 18);
const announcementDay = new Date(2022, 6, 26, 18)

function App() {
  const getRemainingSeconds = useCallback(() => {
    const now = new Date();
    const left = ((+lastDay) - (+now)) / 1000
    return Math.max(0, left);
  }, [])
  
  const getValue = useCallback(() => {
    const left = getRemainingSeconds()
    const fulltime = ((+lastDay) - (+announcementDay)) / 1000
    const leftToWork = (left * 100 / fulltime)
    return Math.max(0, leftToWork);
  }, [getRemainingSeconds])

  const [value, setValue] = useState(getValue()) 
  const [seconds, setSeconds] = useState(getRemainingSeconds()) 

  useEffect(() => {
    setInterval(() => {
      setValue(getValue());
      setSeconds(getRemainingSeconds());
    }, 1000)
  }, [getValue, getRemainingSeconds])
  
  return (
    <div className="App">
      <h1>🍻 Saint timer 🍻</h1>
      <Counter value={value} seconds={seconds} />
    </div>
  );
}

export default App;
