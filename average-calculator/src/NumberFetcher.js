import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberFetcher = ({ numberType }) => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await axios.get(`http://localhost:9876/numbers/${numberType}`);
        const { windowPrevState, windowCurrState, numbers, avg } = response.data;
        setWindowPrevState(windowPrevState);
        setWindowCurrState(windowCurrState);
        setNumbers(numbers);
        setAvg(avg);
      } catch (error) {
        console.error('Error fetching numbers:', error);
      }
    };

    fetchNumbers();
  }, [numberType]);

  return (
    <div>
      <h2>Response:</h2>
      <p>{JSON.stringify({
        windowPrevState,
        windowCurrState,
        numbers,
        avg
      }, null, 2)}</p>
    </div>
  );
};

export default NumberFetcher;
