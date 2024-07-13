import First, { Second, Third } from "./CustomComp";
import "./App.css";

function App() {
  return (
    <div>
      <h1>CONCEPT OF CUSTOM COMPONENTS</h1>
      <Second />
    </div>
  );
}

function New() {
  return (
    <>
      <p>This is new component</p>
      <Third />
    </>
  );
}

export default App;
export { New };
