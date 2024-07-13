import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Applying CSS to react componets</h1>
    </div>
  );
}

// Inline CSS

function First() {
  return (
    <>
      <h1 style={{ color: "red" }}>This is heading tag</h1>
      <b style={{ color: "blue", fontSize: 25 }}>This is bold tag with css</b>
    </>
  );
}

// Document Level CSS

const mystyle = {
  color: "red",
  fontSize: 20,
  fontFamily: "Arial",
};

function Second() {
  return (
    <>
      <br />
      <i style={mystyle}>This is italic tag</i>
      <h3 style={mystyle}>This is heading tag 3</h3>
    </>
  );
}

// External CSS

function Third() {
  return (
    <>
      <h5>This is heading tag 5</h5>
    </>
  );
}

export default App;
export { First, Second, Third };
