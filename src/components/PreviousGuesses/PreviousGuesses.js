import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function PreviousGuesses({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess
          key={Math.random()}
          guess={checkGuess(guesses[i], answer)}
        />
      ))}
    </div>
  );
}

export default PreviousGuesses;
