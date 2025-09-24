import data from "../data/dados.json";
import Card from "../components/Card";
import type { Livro } from "../types";

export default function Livros() {
  return (
    <div className="app-container">
      <h2>Livros</h2>
      <div className="grid">
        {(data.livros as Livro[]).map((l) => (
          <Card key={l.id} item={l} />
        ))}
      </div>
    </div>
  );
}
