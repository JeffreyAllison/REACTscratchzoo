import React from 'react';

export default function ZooOpen({ isOpen }) {
  return (
    <div>
      <div className="sign">
        {isOpen ? 'Welcome to THE jungle' : 'THE Jungle is closed for humans at night'}
      </div>
    </div>
  );
}
