import React, { useState } from "react";

function App() {
  // creating our status
  const [screen, setScreen] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", ".", "-"];

  const updateScreen = (value) => {
    // condition to prevent an oprator to repeat twis repectively
    if (
      (operators.includes(value) && screen === "") ||
      (operators.includes(value) && operators.includes(screen.slice(-1)))
    ) {
      return
    }
    setScreen(screen + value);

    // when the operator is to clicked
    if (!operators.includes(value)) {
      // console.log(screen);
      setResult(eval(screen + value).toString());
    }
  };

  // function to generate buttons from 1-9
  const createButtons = () => {
    let digits = [];
    let numBtn = 10;
    for (let i = 1; i < numBtn; i++) {
      digits.push(
        <button onClick={() => updateScreen(i)} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span>: ""}
          &nbsp;
          {screen || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateScreen("/")}>/</button>
          <button onClick={() => updateScreen("*")}>*</button>
          <button onClick={() => updateScreen("+")}>+</button>
          <button onClick={() => updateScreen("-")}>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createButtons()}
          <button onClick={() => updateScreen("0")}>0</button>
          <button onClick={() => updateScreen(".")}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
