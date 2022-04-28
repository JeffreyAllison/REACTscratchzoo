import React, { useState } from 'react';

export default function AnimalFight() {
  const [dragonPower, setDragonPower] = useState(1);
  const [mammothPower, setMammothPower] = useState(1);

  function handleDragonAttack() {
    setMammothPower(mammothPower - 0.5);
  }

  function handleDragonScales() {
    setDragonPower(dragonPower + 0.5);
  }

  function handleMammothAttack() {
    setDragonPower(dragonPower - 0.5);
  }

  function handleMammothTusks() {
    setMammothPower(mammothPower + 0.5);
  }

  return (
    <>
      <div className="fight">
        <div className="fighter">
          <div className="emoji" style={{ transform: `scale(${dragonPower})` }}>
            🐲
          </div>
          <button onClick={handleDragonAttack}>The Dragon attacks the Mammoth</button>
          <button onClick={handleDragonScales}>The Dragon regenerates its scales</button>
        </div>
        <div className="fighter">
          <div className="emoji" style={{ transform: `scale(${mammothPower})` }}>
            🦣
          </div>
          <button onClick={handleMammothAttack}>The Mammoth attacks the Dragon</button>
          <button onClick={handleMammothTusks}>The Mammoth sharpens its tusks</button>
        </div>
      </div>
    </>
  );
}
