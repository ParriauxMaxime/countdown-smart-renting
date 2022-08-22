import React, { useEffect, useRef } from 'react'

import './Counter.css'

const color = '#ef476b';
function Counter({ value, seconds }: { value: number, seconds: number }) {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    ref.current!.style.background = `conic-gradient(white ${100-value}%, ${color} 0%)`
  }, [value])

  const hours = parseInt(String(seconds / (60 * 60)));
  const minutes = parseInt(String((seconds % 3600) / 60));
  const sec = parseInt(String(seconds)) % 60;
  const time = value !== 0 ? `${hours}h ${minutes}m ${sec}s` : "Game over";

  return (
    <div ref={(r: HTMLDivElement) => {
      ref.current = r;
    }} className='Counter' data-progress={time}></div>
  )
}

export default Counter