import React, { useState } from 'react';
import CountDebt from './CountDebt';

const GameInfo = ({ players }) => {
  const [cost, setCost] = useState('')
  const [totalCost, setTotalCost] = useState(null)
  const [showCountDebt, setShowCountDebt] = useState(false)

  const addInfo = (event) => {
    event.preventDefault()
    const value = parseFloat(cost)
    
    setTotalCost(value)
    setCost('')
    setShowCountDebt(true)
  };

  return (
    <div>
      <form onSubmit={addInfo}>
        <h3>Pelin tiedot</h3>

        <div>
          hinta yhteensä:
          <input
            type="text"
            value={cost}
            id="cost"
            inputmode="numeric"
            step="0.01"
            min={0}
            onChange={(event) => setCost(event.target.value)}
            required
          />
          €
        </div>
        <button type="submit">laske velat</button>
      </form>

      {showCountDebt && <CountDebt players={players} totalCost={totalCost} />}
    </div>
  );
};

export default GameInfo;
