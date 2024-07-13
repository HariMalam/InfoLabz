import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <FetchAPI />
    </div>
  );
}

function FetchAPI() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://inshortsapi.vercel.app/news?category=sports")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
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
      <Table bordered striped hover>
        <thead className="table-dark">
          <tr>
            <th>SR NO</th>
            <th>NEWS TITLE</th>
            <th>AUTHOR</th>
            <th>DATE & TIME</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                {item.date} {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
