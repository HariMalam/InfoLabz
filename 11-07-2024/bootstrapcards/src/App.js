import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <h1 style={{textAlign: "center"}}> Today's Trending News</h1>
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
    }, 500000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container fluid className="p-5">
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
            return (
              <>
                <Col className="container-fluid mt-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.imageUrl}
                      height="275px"
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
