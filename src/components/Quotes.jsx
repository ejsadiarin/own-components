import { useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState('quote here');
  // const [isNew, setIsNew] = useState(false);

  function handleClick() {
    setQuote('new quote!!!');
  }

  return (
    <>
      <h1>Quotes</h1>
      <p>{quote}</p>
      <button onClick={handleClick}>Generate New Quote</button>
    </>
  );
}