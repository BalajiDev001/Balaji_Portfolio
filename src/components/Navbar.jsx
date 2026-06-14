function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a
  className="navbar-brand"
  href="#"
  style={{
    background: "linear-gradient(90deg, #38BDF8, #22D3EE)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
    letterSpacing: "1.5px",
    fontSize: "1.05rem",
  }}
>
  Learning Today, Building Tomorrow
</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;