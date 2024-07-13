import { Comptwo } from "./custom";
import { Login } from "./practice";

function First() {
  return (
  <div className="comp">
    <p>This is First Component</p>
  </div>
  );
}

function Second() {
  return (
    <div className="comp">
      <p>This is Second Component</p>
    </div>
    );
}

function Third() {
  return (
    <div className="comp">
      <p>This is Third Component</p>
      <Comptwo />
      <Second />
      <Login />
    </div>
  );
}

export default First;
export { Second, Third };
