import React, { useState } from 'react';
import './App.css';
import ZooOpen from './ZooOpen.js';
import AnimalParade from './AnimalParade.js';
import CustomButton from './CustomButton';

function Zoo() {
  const [dragonPower, setDragonPower] = useState(3);
  const [mammothPower, setMammothPower] = useState(3);
  const ATTACK_MODIFIER = 0.8;
  const [animal, setAnimal] = useState(['']);
  const [isOpen, setIsOpen] = useState(false);

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

  function handleAddGrey() {
    animal.push('grey');
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

  function handleOpenZoo() {
    setIsOpen(true);
  }

  function handleCloseZoo() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <div className="fight">
        <div className="fighter">
          <div className="emoji" style={{ fontSize: `${dragonPower}rem` }}>
            🐲
          </div>
          <CustomButton onClick={handleDragonAttack}>The Dragon attacks the Mammoth</CustomButton>
          <CustomButton onClick={handleDragonScales}>
            The Dragon regenerates its scales
          </CustomButton>
        </div>
        <div className="fighter">
          <div className="emoji" style={{ fontSize: `${mammothPower}rem` }}>
            🦣
          </div>
          <CustomButton onClick={handleMammothAttack}>The Mammoth attacks the Dragon</CustomButton>
          <CustomButton onClick={handleMammothTusks}>The Mammoth sharpens its tusks</CustomButton>
        </div>
      </div>
      <AnimalParade animals={animal} />
      <div className="animal-buttons">
        <CustomButton onClick={handleAddDodo}>Dodo</CustomButton>
        <CustomButton onClick={handleAddGrey}>Grey</CustomButton>
        <CustomButton onClick={handleAddGorilla}>Gorilla</CustomButton>
        <CustomButton onClick={handleAddBat}>Bat</CustomButton>
        <CustomButton onClick={handleAddDragon}>Dragon</CustomButton>
        <CustomButton onClick={handleAddMammoth}>Mammoth</CustomButton>
      </div>
      <ZooOpen isOpen={isOpen} />
      <CustomButton onClick={handleOpenZoo}>Enter</CustomButton>
      <CustomButton onClick={handleCloseZoo}>Exit</CustomButton>
    </div>
  );
}

export default Zoo;
