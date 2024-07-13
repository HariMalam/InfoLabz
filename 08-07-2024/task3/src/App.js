import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Badge, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

function Cards() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://inshorts.vercel.app/news/top";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const fetchedData = await response.json();
      setData(fetchedData.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row xs={1} md={2} lg={4} className="g-4 p-5">
      {data.map((article, index) => (
        <Col key={index}>
          <CardComp article={article} />
        </Col>
      ))}
    </Row>
  );
}

function CardComp({ article }) {
  return (
    <Card style={{ width: "100%", textAlign: "left" }}>
      <Card.Title className="m-3 px-4">
        {article.categoryNames.map((item, index) => (
          <Badge bg="success" className="mx-1" key={index}>
            {item}
          </Badge>
        ))}
      </Card.Title>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Author Name : {article.authorName}
      </Card.Footer>
    </Card>
  );
}

export default App;
