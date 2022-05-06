import React from 'react';
import Animal from './Animal.js';

export default function AnimalParade({ animals }) {
  return (
    <>
      <div className="parade">
        {animals.map((animal, index) => (
          <Animal animals={animal} key={animal + index} />
        ))}
      </div>
    </>
  );
}
