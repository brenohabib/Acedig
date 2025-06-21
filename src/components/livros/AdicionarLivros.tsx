import { useState } from "react";

function AdicionarLivro() {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8080/livro-digital", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo })
    })
      .then(res => res.json())
      .then(data => {
        alert("Livro adicionado!");
        setTitulo("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        placeholder="Título do livro"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AdicionarLivro;