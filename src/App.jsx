import { useState } from 'react';
import { nanoid } from 'nanoid';

import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Input Element sends string
    const amount = parseInt(count);
    const paragraphs = data.slice(0, amount);
    setText(paragraphs);
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          min="1"
          step="1"
          max="9"
          id="amount"
          name="amount"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
