import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Covid apiGet</h1>
      <FetchAPI />
    </div>
  );
}

function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.statewise);
      });
  };

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <tr>
          <th>Sr No</th>
          <th>State Name</th>
          <th>Confirmed Cases</th>
          <th>Death Cases</th>
          <th>Recovered Cases</th>
        </tr>
        {data.map((item, i) => (
          <tr>
            <th>{i + 1}</th>
            <td>{item.state}</td>
            <td>{item.confirmed}</td>
            <td>{item.deaths}</td>
            <td>{item.recovered}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
