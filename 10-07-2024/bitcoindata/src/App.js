import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bitcoin Live Data</h1>
      <FetchAPI />
    </div>
  );
}

function FetchAPI() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.bpi.USD);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      apiGet();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>{data.rate}</h1>
    </>
  );
}

export default App;
