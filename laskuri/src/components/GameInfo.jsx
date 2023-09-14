import React, { useState } from 'react';
import CountDebt from './CountDebt';

const GameInfo = ({ players }) => {
  const [currency, setCurrency] = useState('');
  const [info, setInfo] = useState(null); // Use null instead of an empty array
  const [showCountDebt, setShowCountDebt] = useState(false); // State to control when to show CountDebt

  const addInfo = (event) => {
    event.preventDefault();
    const infoValue = parseFloat(currency);
    
    setInfo(infoValue); // Store the single value, not in an array
    setCurrency(''); // Clear the input field
    setShowCountDebt(true); // Show CountDebt component
  };

  return (
    <div>
      <form onSubmit={addInfo}>
        <h3>Pelin tiedot</h3>

        <div>
          hinta yhteensä:
          <input
            type="number"
            value={currency}
            id="currency"
            step="0.01"
            onChange={(event) => setCurrency(event.target.value)}
          />
        </div>
        <button type="submit">laske velat</button>
      </form>

      {showCountDebt && <CountDebt players={players} info={info} />}
    </div>
  );
};

export default GameInfo;
