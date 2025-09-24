import data from "../data/dados.json";
import Card from "../components/Card";
import type { Animal } from "../types";

export default function Animais() {
  return (
    <div className="app-container">
      <h2>Animais</h2>
      <div className="grid">
        {(data.animais as Animal[]).map((a) => (
          <Card key={a.id} item={a} />
        ))}
      </div>
    </div>
  );
}
