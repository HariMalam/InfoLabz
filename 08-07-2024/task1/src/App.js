import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, Badge, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

function Cards() {
  const movies = [
    {
      title: "3 Idiots",
      badge: "NOW SHOWING",
      img: "https://www.letsfindmovie.com/wp-content/uploads/2020/04/aFGPUmbgGoAt93WP3WYsAPa0Yv8.jpg",
      text: `Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".`,
      items: ["Aamir Khan", "Madhavan", "Mona Singh"],
      type: "Comedy, Drama",
    },
    {
      title: "K.G.F: Chapter 2",
      badge: "UPCOMING",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca36ab143998347.6284aaf906458.png",
      text: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes, while the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
      items: [`Yash`, "Sanjay Dutt", "Raveena Tandon"],
      type: "Action, Crime, Drama",
    },
    {
      title: "Avengers: Endgame",
      badge: "NOW SHOWING",
      img: "https://www.hdwallpapers.in/download/avengers_endgame_2019-HD.jpghttps://hdqwalls.com/download/poster-avengers-endgame-ni-1920x1080.jpg",
      text: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      items: ["Robert Downey Jr", "Chris Evans", "Mark Ruffalo"],
      type: "Action, Adventure, Drama",
    },
    {
      title: "Kalki 2898 AD",
      badge: "UPCOMING",
      img: "https://prtechnews.com/kalki-2898-ad-box-office-collection-day-9-cross-rs-431-crore-latest-bollywood-news/fb7i868o_large_625x300_12_June_24.jpg",
      text: "A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.",
      items: ["Prabhas", "Amitabh Bachchan", "Kamal Haasan"],
      type: "Action, Adventure, Drama",
    },
    {
      title: "Baahubali: The Beginning",
      badge: "NOW SHOWING",
      img: "https://www.roundtableindia.co.in/wp-content/uploads/2017/05/bahubali_poster.jpg",
      text: "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
      items: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
      type: "Action, Drama",
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      badge: "NOW SHOWING",
      img: "https://aztechin.com/wp-content/uploads/2022/05/DSB2.jpg",
      text: "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse. They seek help from the Scarlet Witch, Wong and others.",
      items: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
      type: "Action, Adventure, Fantasy",
    },
    {
      title: "Dangal",
      badge: "NOW SHOWING",
      img: "https://1.bp.blogspot.com/-FKjEIr8IASA/WE6l5uPJovI/AAAAAAAAS54/u4YaojkmjVgsvT6eP87TpysEmnL316rlgCLcB/s1600/Dangal%2B-%2BNew%2BPoster.jpg",
      text: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
      items: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
      type: "Action, Biography, Drama",
    },
    {
      title: "Interstellar",
      badge: "NOW SHOWING",
      img: "https://i0.wp.com/moviefail.com/wp-content/uploads/2014/11/interstellar3.jpg",
      text: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      items: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      type: "Adventure, Drama, Sci-Fi",
    },
    {
      title: "Brahmastra Part One: Shiva",
      badge: "UPCOMING",
      img: "https://i.ytimg.com/vi/oEHODuyo2Hg/maxresdefault.jpg",
      text: "A DJ with superpowers and his ladylove embark on a mission to protect the Brahmastra, a weapon of enormous energy, from dark forces closing in on them.",
      items: ["Amitabh Bachchan", "Ranbir Kapoor", "Alia Bhatt"],
      type: "Action, Adventure, Fantasy",
    },
  ];

  return (
    <Row xs={1} md={2} lg={3} className="g-4 p-5">
      {movies.map((movie, index) => (
        <Col key={index}>
          <CardComp movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

function CardComp({ movie }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Title className="m-3 px-4">
        {movie.badge === "UPCOMING" ? (
          <Badge bg="danger">{movie.badge}</Badge>
        ) : (
          <Badge bg="primary">{movie.badge}</Badge>
        )}
      </Card.Title>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {movie.items.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className="text-muted">{movie.type}</Card.Footer>
    </Card>
  );
}

export default App;
