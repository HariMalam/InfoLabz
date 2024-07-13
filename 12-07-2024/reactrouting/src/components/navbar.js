const { Link } = require("react-router-dom");

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="link">
        HOME
      </Link>
      <Link to="/about" className="link">
        ABOUT
      </Link>
      <Link to="/services" className="link">
        SERVICES
      </Link>
      <Link to="/contact" className="link">
        CONTACT
      </Link>
    </div>
  );
}

export default Navbar;
