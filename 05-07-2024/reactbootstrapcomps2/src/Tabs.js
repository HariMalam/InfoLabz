import { Nav, Row, Tab, Tabs, Col } from "react-bootstrap";
import { useState } from "react";

function Controlledtabs() {
  const [key, setKey] = useState("home");
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contect">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  );
}

function Justifiedtabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="longer-tab" title="Loooongeer Tab">
          Tab content for Loooongeer Tab
        </Tab>
        <Tab eventKey="contect" title="Contect">
          Tab content for Contect
        </Tab>
      </Tabs>
    </>
  );
}

function Pilltabs() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default Controlledtabs;
export { Justifiedtabs, Pilltabs };
