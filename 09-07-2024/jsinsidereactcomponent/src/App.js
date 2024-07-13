import "./App.css";

function App() {
  return (
    <div className="App">
      <First />
      <Second />
      <Third />
      <Fourth />
      <New />
    </div>
  );
}

function First() {
  let name = "Malam Hari";
  return (
    <>
      <p>Hello {name}</p>
    </>
  );
}

function Second() {
  let a = 10,
    b = 20;
  return (
    <>
      <p>
        Addition of {a} and {b} is {a + b}
      </p>
    </>
  );
}

let datarange = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function Third() {
  return (
    <>
      <p>
        Addition of first and last element is{" "}
        {datarange[0] + datarange[datarange.length - 1]}
      </p>
    </>
  );
}

function Fourth() {
  return (
    <>
      <p>The data is : {newdata["First"]}</p>
    </>
  );
}

function New() {
  function check() {
    alert("Button Clicked");
  }
  return (
    <>
      <button onClick={check}>CLICK HERE</button>
    </>
  );
}

let newdata = { First: "Ahmedabad", Second: "Rajkot" };

export default App;
