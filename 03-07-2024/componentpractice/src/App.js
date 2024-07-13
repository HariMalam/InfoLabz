import "./App.css";
import Login, { Logout, All } from "./Customcomps";

function App() {
  return (
    <div className="app">
      <h1>Component Practice</h1>
    </div>
  );
}

function First() {
  return (
    <>
      <h3>This is First Component</h3>
    </>
  );
}

function Second() {
  return (
    <div className="second">
      <h2>This is Second Component</h2>
      <First />
      <Login />
    </div>
  );
}

function Third() {
  return (
    <div className="third">
      <h2>This is Third Component</h2>
      <Fourth />
      <Logout />
    </div>
  );
}

function Fourth() {
  return (
    <>
      <h3>This is Fourth Component</h3>
    </>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <h2>This is Buttons Component</h2>
      <All />
    </div>
  );
}
export default App;
export { Second, Third, Buttons };
