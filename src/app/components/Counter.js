'use client'
import { useState } from 'react';

export default function Counter({ increment, color }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + increment;
    setCount(newCount > 10 ? 0 : newCount);
  };

  return (
    <div style={{ margin: '1em' }}>
      <h3>Counter (+{increment})</h3>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Add {increment}
      </button>
      <p>Current Count: {count}</p>
    </div>
  );
}