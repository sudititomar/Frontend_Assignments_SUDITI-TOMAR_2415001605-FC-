// 25, 26, 27 in one file for simplicity
import React from "react";

function HelloWorld() {
  return <h1>Hello World</h1>;
}

function Greetings() {
  const name = "Suditi";
  const getTimeGreeting = () => "Good Evening";
  return (
    <div>
      <p>{getTimeGreeting()}, {name}!</p>
      <p>1 + 2 = {1 + 2}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Greetings />
    </div>
  );
}

export default App;
