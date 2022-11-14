import React, { useState } from 'react';

export default function SpotCheck1() {
  const [currentNumber, setCurrentNumber] = useState(1)
  
  const plusOne = () => setCurrentNumber(currentNumber + 1)
  const minusOne = () => setCurrentNumber(currentNumber - 1)


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
            <p>You're number {currentNumber}</p>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
      </div>
    </div>
  )
}