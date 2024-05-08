import React from 'react';
import NumberFetcher from './NumberFetcher';


const App = () => {
  return (
    <div>
      <h1>Average Calculator</h1>
      <NumberFetcher numberType="even" /> {/* Fetch even numbers */}
      <NumberFetcher numberType="primes" /> {/* Fetch prime numbers */}
      <NumberFetcher numberType="fibo" /> {/* Fetch Fibonacci numbers */}
      <NumberFetcher numberType="rand" /> {/* Fetch random numbers */}
    </div>
  );
};

export default App;