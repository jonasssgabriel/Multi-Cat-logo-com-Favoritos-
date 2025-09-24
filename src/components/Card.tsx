import type { DataItem, Animal, Livro, Pessoa } from "../types";
import { useFavorites } from "../context/FavoritesContext";

interface CardProps {
  item: DataItem;
}

export default function Card({ item }: CardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((f) => f.id === item.id);

  const handle = () =>
    isFavorite ? removeFavorite(Number(item.id)) : addFavorite(item);

  // Type guards baseados em propriedades únicas
  const isAnimal = (i: DataItem): i is Animal => "especie" in i;
  const isLivro = (i: DataItem): i is Livro => "titulo" in i;
  const isPessoa = (i: DataItem): i is Pessoa => "area" in i;

  return (
    <div className="card">
      {isAnimal(item) && item.imagem && (
        <img className="card-img" src={item.imagem} alt={item.nome} />
      )}
      {isLivro(item) && item.capa && (
        <img className="card-img" src={item.capa} alt={item.titulo} />
      )}
      {isPessoa(item) && item.foto && (
        <img className="card-img" src={item.foto} alt={item.nome} />
      )}

      <div style={{ paddingTop: "0.5rem" }}>
        {isAnimal(item) && <h3>{item.nome}</h3>}
        {isLivro(item) && <h3>{item.titulo}</h3>}
        {isPessoa(item) && <h3>{item.nome}</h3>}

        {isAnimal(item) && <p>Espécie: {item.especie}</p>}
        {isLivro(item) && (
          <p>
            Autor: {item.autor} — {item.ano}
          </p>
        )}
        {isPessoa(item) && <p>Área: {item.area}</p>}

        <button onClick={handle}>{isFavorite ? "Remover" : "Favoritar"}</button>
      </div>
    </div>
  );
}
