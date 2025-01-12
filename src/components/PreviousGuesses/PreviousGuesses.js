import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function PreviousGuesses({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
          <Guess key={Math.random()} guess={guesses[i]} />
        ))}
      </div>
    </>
  );
}

export default PreviousGuesses;
