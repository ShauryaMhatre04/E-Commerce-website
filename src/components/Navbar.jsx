import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          letterSpacing: "2px",
          margin: 0,
          color: "white",
        }}
      >
        <span style={{ color: "#2997ff" }}>N</span>
        ove
        <span style={{ color: "#2997ff" }}>x</span>
      </h1>

      <ul>
        <li>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Store
          </Link>
        </li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            Cart
          </Link>
        </li>
      </ul>

      <button>Buy Now</button>
    </nav>
  );
}

export default Navbar;