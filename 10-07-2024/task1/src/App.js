import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ApiFetch />
    </div>
  );
}

function ApiFetch() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://isro.vercel.app/api/spacecrafts")
      .then((response) => response.json())
      .then((json) => {
        setData(json.spacecrafts);
      });
  };

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>SR NO</th>
            <th>SPACE CRAFT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <th>{i + 1}</th>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
