import React, { useState,useEffect } from "react";

function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState(null);

  const fakeJoke = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setJoke(data);
      console.log(data.setup);
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {
    fakeJoke();
}, []);

  return (
    <div>
      <h1>Jokes</h1>
      <button onClick={fakeJoke}>Genrate Joke</button>
      {joke && (
        <div>
          <p>{joke.setup}</p>
          <p>Punchline: {joke.punchline}</p>
        </div>
      )}
    </div>
  );
}

export default Joker;
