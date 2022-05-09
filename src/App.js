
function App() {

  const createButtons = () => {
    let digits = [];
    let numBtn = 10
    for (let i = 1; i < numBtn; i++) {
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createButtons()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
