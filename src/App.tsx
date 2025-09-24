import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Animais from "./pages/Animais";
import Livros from "./pages/Livros";
import Pessoas from "./pages/Pessoas";
import Favoritos from "./pages/Favoritos";
import { FavoritesProvider } from "./context/FavoritesContext";

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/animais" replace />} />
          <Route path="/animais" element={<Animais />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/pessoas" element={<Pessoas />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}
