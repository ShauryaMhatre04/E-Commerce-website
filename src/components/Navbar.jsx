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
        <li>Store</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Buy Now</button>
    </nav>
  );
}

export default Navbar;