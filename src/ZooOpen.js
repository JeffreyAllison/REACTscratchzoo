import React from 'react';

export default function ZooOpen({ isOpen }) {
  return (
    <div>
      <div className="sign">{isOpen ? 'The Zoo is open!' : 'The Zoo is closed for the day'}</div>
    </div>
  );
}
