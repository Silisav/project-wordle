import React from 'react';
import PreviousGuesses from '../PreviousGuesses';
import FormInput from '../FormInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <FormInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
