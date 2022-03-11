import React, { useState } from 'react';
import './account.css';

const Account = () => {
  const [values, setValue] = useState(0);

  let val = 0;

  return (
    <div className='konto'>
      <h2>Dein Girokonto</h2>
      <p>{values}€</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => val = Number(e.target.value)} type="number" name="number" />
        <button onClick={() => setValue(values + val)} type='submit'>Einzahlen</button>
        <button onClick={() => setValue(values - val)} type='submit'>Auszahlen</button>
      </form>
    </div>
  );
}

export default Account;