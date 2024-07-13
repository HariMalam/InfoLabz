import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ButtonGroup,
  Button,
  Pagination,
  Breadcrumb,
  Toast,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "holderjs";
import Controlledtabs, { Justifiedtabs, Pilltabs } from "./Tabs";

function App() {
  return (
    <div className="App">
      <div className="mainBox">
        <div className="box">
          <Btngroups />
        </div>
        <div className="box">
          <PaginationComp />
        </div>
        <div className="box">
          <BreadcrumbsComp />
        </div>
        <div className="box">
          <Overlays />
        </div>
        <div className="box">
          <Toasts />
        </div>
      </div>

      <div className="mainBox">
        <div className="box">
          <Controlledtabs />
        </div>
        <div className="box">
          <Justifiedtabs />
        </div>
        <div className="box">
          <Pilltabs />
        </div>
      </div>
    </div>
  );
}

function Btngroups() {
  return (
    <>
      <ButtonGroup aria-label="Basic Example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </>
  );
}

function PaginationComp() {
  return (
    <>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
}

function BreadcrumbsComp() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/student">Students</Breadcrumb.Item>
        <Breadcrumb.Item active>Malam Hari</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

function Overlays() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Overlays Button</Button>
      </OverlayTrigger>
    </>
  );
}

function Toasts() {
  return (
    <>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Malam Hari</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Hello, This is a toast message.</Toast.Body>
      </Toast>
    </>
  );
}
export default App;
export { Btngroups, PaginationComp, BreadcrumbsComp, Overlays, Toasts };
