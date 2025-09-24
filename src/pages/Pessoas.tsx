import data from "../data/dados.json";
import Card from "../components/Card";
import type { Pessoa } from "../types";

export default function Pessoas() {
  return (
    <div className="app-container">
      <h2>Pessoas</h2>
      <div className="grid">
        {(data.pessoas as Pessoa[]).map((p) => (
          <Card key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
}
