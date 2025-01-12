import React from 'react';

function FormInput({ handleGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      alert('Guess must be 5 letters long.');
      return;
    }
    handleGuess(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        value={guess}
      />
    </form>
  );
}

export default FormInput;
