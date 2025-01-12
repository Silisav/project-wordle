import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={Math.random()}
          className={
            guess && guess[i].status !== null
              ? `cell ${guess[i].status}`
              : 'cell'
          }
        >
          {guess && guess[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
