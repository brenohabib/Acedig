import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdicionarLivros() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [editora, setEditora] = useState("");
    const [anoPublicacao, setAnoPublicacao] = useState("");
    const [texto, setTexto] = useState("");
    const [quantidadePaginas, setQuantidadePaginas] = useState("");
    const [tamanhoArquivo, setTamanhoArquivo] = useState("");
    const [tipoLivro, setTipoLivro] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuccess("");
        setError("");
        const livro = {
    titulo,
    autor,
    isbn,
    editora,
    anoPublicacao: Number(anoPublicacao),
    texto,
    quantidadePaginas: Number(quantidadePaginas),
    tamanhoArquivo: Number(tamanhoArquivo)
};
        try {
            const res = await fetch("http://localhost:8080/livro-digital", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(livro)
            });
            if (res.ok) {
                setSuccess("Livro adicionado com sucesso!");
                setTimeout(() => navigate("/acervo"), 1200);
            } else {
                const msg = await res.text();
                setError(msg || "Erro ao adicionar livro.");
            }
        } catch {
            setError("Erro de conexão com o servidor.");
        }
    }

    return (
        <div className="login-container">
            <h2>Adicionar Livro Digital</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título:</label>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Autor:</label>
                    <input value={autor} onChange={e => setAutor(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>ISBN:</label>
                    <input value={isbn} onChange={e => setIsbn(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Editora:</label>
                    <input value={editora} onChange={e => setEditora(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Ano de Publicação:</label>
                    <input type="number" value={anoPublicacao} onChange={e => setAnoPublicacao(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Texto:</label>
                    <textarea value={texto} onChange={e => setTexto(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Quantidade de Páginas:</label>
                    <input type="number" value={quantidadePaginas} onChange={e => setQuantidadePaginas(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Tamanho do Arquivo (MB):</label>
                    <input type="number" value={tamanhoArquivo} onChange={e => setTamanhoArquivo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Tipo do Livro:</label>
                    <input value={tipoLivro} onChange={e => setTipoLivro(e.target.value)} />
                </div>
                {success && <div style={{ color: "green", marginBottom: 10 }}>{success}</div>}
                {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}
                <button type="submit">Adicionar Livro</button>
            </form>
            <button
                style={{
                    marginTop: 16,
                    background: "#ffd381",
                    color: "#b71c1c",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 18px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/home")}
            >
                Voltar para Home
            </button>
        </div>
    );
}

export default AdicionarLivros;