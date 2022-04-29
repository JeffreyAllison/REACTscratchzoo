import React, { useState } from 'react';
import './App.css';
import ZooOpen from './ZooOpen.js';
import AnimalParade from './AnimalParade.js';

function App() {
  const [dragonPower, setDragonPower] = useState(1);
  const [mammothPower, setMammothPower] = useState(1);
  const ATTACK_MODIFIER = 0.8;
  const [animal, setAnimal] = useState(['dodo', 'bison']);

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

  function handleAddDodo() {
    animal.push('dodo');
    setAnimal([...animal]);
  }

  function handleAddBison() {
    animal.push('bison');
    setAnimal([...animal]);
  }

  function handleAddGorilla() {
    animal.push('gorilla');
    setAnimal([...animal]);
  }

  function handleAddBat() {
    animal.push('bat');
    setAnimal([...animal]);
  }

  function handleAddDragon() {
    animal.push('dragon');
    setAnimal([...animal]);
  }

  function handleAddMammoth() {
    animal.push('mammoth');
    setAnimal([...animal]);
  }

  return (
    <div className="App">
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
      <AnimalParade animals={animal} />
      <div className="animal-buttons">
        <button onClick={handleAddDodo}>Dodo</button>
        <button onClick={handleAddBison}>Bison</button>
        <button onClick={handleAddGorilla}>Gorilla</button>
        <button onClick={handleAddBat}>Bat</button>
        <button onClick={handleAddDragon}>Dragon</button>
        <button onClick={handleAddMammoth}>Mammoth</button>
      </div>
      <ZooOpen />
    </div>
  );
}

export default App;
