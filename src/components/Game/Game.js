import React from 'react';
import PreviousGuesses from '../PreviousGuesses';
import FormInput from '../FormInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setStatus('won');
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      <FormInput status={status} handleGuess={handleGuess} />
      {status === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {status === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
