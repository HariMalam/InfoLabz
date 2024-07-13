import "./App.css";

function App() {
  return (
    <>
      <h1>Hello Infolabz</h1>
    </>
  );
}

function FirstComp() {
  return (
    <>
      <h1>This is First Component</h1>
    </>
  );
}

function SecondComp() {
  return (
    <>
      <h1>This is Second Component</h1>
      <FirstComp />
    </>
  );
}

function ThirdComp() {
  return (
    <>
      <h1>This is Third Component</h1>
    </>
  );
}

function FourthComp() {
  return (
    <>
      <h1>This is Fourth Component</h1>
      <ThirdComp />
    </>
  );
}

export default App;
export { FirstComp, SecondComp, ThirdComp, FourthComp };
