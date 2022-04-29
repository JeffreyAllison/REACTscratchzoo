import React from 'react';

export default function Animal({ animals }) {
  return (
    <div className="animal">
      {animals === 'dodo' && '🦤'}
      {animals === 'grey' && '👽'}
      {animals === 'gorilla' && '🦍'}
      {animals === 'bat' && '🦇'}
      {animals === 'dragon' && '🐉'}
      {animals === 'mammoth' && '🦣'}
    </div>
  );
}
