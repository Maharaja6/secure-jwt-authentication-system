import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        🔐 SecureAuth
      </div>

      <div className="nav-right">
        React • FastAPI • JWT
      </div>
    </nav>
  );
}

export default Navbar;