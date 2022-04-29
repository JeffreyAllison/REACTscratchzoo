import React, { useState } from 'react';

export default function AnimalFight() {
  const [dragonPower, setDragonPower] = useState(1);
  const [mammothPower, setMammothPower] = useState(1);

  const ATTACK_MODIFIER = 0.8;

  function handleDragonAttack() {
    setMammothPower(mammothPower - ATTACK_MODIFIER);
  }

  function handleDragonScales() {
    setDragonPower(dragonPower + ATTACK_MODIFIER);
  }

  function handleMammothAttack() {
    setDragonPower(dragonPower - ATTACK_MODIFIER);
  }

  function handleMammothTusks() {
    setMammothPower(mammothPower + ATTACK_MODIFIER);
  }

  return (
    <>
      <div className="fight">
        <div className="fighter">
          <div className="emoji" style={{ fontSize: `${dragonPower}rem` }}>
            🐲
          </div>
          <button onClick={handleDragonAttack}>The Dragon attacks the Mammoth</button>
          <button onClick={handleDragonScales}>The Dragon regenerates its scales</button>
        </div>
        <div className="fighter">
          <div className="emoji" style={{ fontSize: `${mammothPower}rem` }}>
            🦣
          </div>
          <button onClick={handleMammothAttack}>The Mammoth attacks the Dragon</button>
          <button onClick={handleMammothTusks}>The Mammoth sharpens its tusks</button>
        </div>
      </div>
    </>
  );
}
