import React, { useState } from 'react';

export default function ZooOpen() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenZoo() {
    setIsOpen(true);
  }

  function handleCloseZoo() {
    setIsOpen(false);
  }

  return (
    <div>
      <div>{isOpen ? 'The Zoo is open!' : 'The Zoo is closed for the day'}</div>
      <button onClick={handleOpenZoo}>ZooOpen</button>
      <button onClick={handleCloseZoo}>ZooNope</button>
    </div>
  );
}
