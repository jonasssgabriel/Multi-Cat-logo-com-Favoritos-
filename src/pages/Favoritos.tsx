import Card from "../components/Card";
import { useFavorites } from "../context/FavoritesContext";

export default function Favoritos() {
  const { favorites } = useFavorites();
  return (
    <div className="app-container">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? <p>Nenhum favorito</p> : (
        <div className="grid">
          {favorites.map(f => <Card key={f.id} item={f} />)}
        </div>
      )}
    </div>
  );
}
