// import React from 'react'

import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((Count) => Count + 1);
    }, 1000);

    return () => clearTimeout(Timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
