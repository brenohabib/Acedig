import './livrosPlaceholder.css';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export function LivroPlaceholder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [livro, setLivro] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notificacaoMsg, setNotificacaoMsg] = useState("");

  const usuarioId = 1;

  async function handleReserva() {
    try {
      const res = await fetch("http://localhost:8080/notificacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: { id: usuarioId }, // ou usuarioId, conforme seu backend
          mensagem: `Reserva solicitada para o livro "${livro.titulo}"`,
          tipoNotificacao: "reserva"
        })
      });
      if (res.ok) {
        setNotificacaoMsg("Reserva registrada com sucesso!");
      } else {
        setNotificacaoMsg("Erro ao registrar reserva.");
      }
    } catch {
      setNotificacaoMsg("Erro de conexão ao registrar reserva.");
    }
  }

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    // Busca apenas livro digital
    fetch(`http://localhost:8080/livro-digital/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Livro não encontrado');
        }
      })
      .then(data => setLivro(data))
      .catch(() => setLivro(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="livro-page"><div style={{ textAlign: "center", marginTop: 40 }}>Carregando livro...</div></div>;
  }

  if (!livro) {
    return <div className="livro-page"><div style={{ textAlign: "center", marginTop: 40, color: "red" }}>Livro não encontrado.</div></div>;
  }

  return (
    <div className="livro-page">
      <aside className="livro-sidebar">
        <button
          className="livro-voltar-btn topo-esquerda"
          onClick={() => navigate('/home')}
          aria-label="Fechar"
        >
          &#10005;
        </button>
        <div className="livro-capa">
            <h2 className="livro-titulo">{livro.titulo}</h2>
            <div className="livro-autor">Autor: {livro.autor}</div>
            <div className="livro-popularidade">Popularidade: {livro.popularidade ?? "N/A"}</div>
            <div className="livro-quantidade">
            Páginas: {livro.quantidadePaginas}
            </div>
            <div className="livro-editora"><b>Editora:</b> {livro.editora}</div>
            <div className="livro-ano"><b>Ano de Publicação:</b> {livro.anoPublicacao}</div>
            <div className="livro-tipo"><b>Tipo:</b> Digital</div>
            <div className="livro-tamanho"><b>Tamanho do Arquivo:</b> {livro.tamanhoArquivo} MB</div>
            <button
          className="livro-reserva-btn"
          onClick={handleReserva}
        >
          Reserva
        </button>
        {notificacaoMsg && (
          <div style={{ color: "#388e3c", marginTop: 8, fontSize: 13 }}>
            {notificacaoMsg}
          </div>
        )}
        </div>
      </aside>
      <main className="livro-conteudo-area">
        <div className="livro-conteudo">
          <div style={{ whiteSpace: "pre-line" }}>
            {livro.texto || "Sem conteúdo para exibir."}
          </div>
        </div>
      </main>
    </div>
  );
}