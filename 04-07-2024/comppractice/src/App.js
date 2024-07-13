import "./App.css";

const mySytle = {
  color: "red",
  fontSize:"20px"
}

function App() {
  return (
    <div className="comp">
      <p style={mySytle}>This is App Component</p>
    </div>
  );
}


function Msg() {
  return (
    <div className="comp">
      <p>This is Msg Component</p>
    </div>
  );
}

function New() {
  return (
    <div className="comp">
      <p>This is New Component</p>
    </div>
  );
}

function Practice() {
  return (
    <div className="comp">
      <p>This is Practice Component</p>
      <Msg />
      <New />
    </div>
  );
}

export default App;
export { Msg, New, Practice };
