import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "0.2rem", background: "#898989" }}>
      <div className="app-container">
        <Link to="/animais">Animais</Link>{"  "}
        <Link to="/livros">Livros</Link>{"  "}
        <Link to="/pessoas">Pessoas</Link>{"  "}
        <Link to="/favoritos">Favoritos</Link>
      </div>
    </nav>
  );
}
