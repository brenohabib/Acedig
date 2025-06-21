import React, { useEffect, useState } from 'react';
import './TBD.css'
import TopBar from './TopBar';
import LivroMenuInterface from './LivroMenuInterface';



function Acervo() {
    const [search, setSearch] = useState('');
    const [livros, setLivros] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/livro-digital")
            .then(res => res.json())
            .then(data => setLivros(data))
            .catch(() => setLivros([]))
            .finally(() => setLoading(false));
    }, []);

    // Filtra os livros pelo título, ignorando maiúsculas/minúsculas e acentos
    const filteredLivros = livros.filter(livro =>
        livro.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .includes(
                search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            )
    );

    return (
        <div className="main-menu">
            <TopBar />
            <div className='search-container'>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Buscar livro..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className='main-acervo'>
                <div className='livros'>
                    <h3>Acervo Digital</h3>
                    <div className={`livros-lista${filteredLivros.length === 0 ? ' lista-vazia' : ''}`}>
                        {loading ? (
                            <div style={{ width: "100%", textAlign: "center", color: "#888", marginTop: 32 }}>
                                Carregando livros...
                            </div>
                        ) : filteredLivros.length > 0 ? (
                            filteredLivros.map((livro, idx) => (
                                <LivroMenuInterface
                                    key={livro.id || idx}
                                    titulo={livro.titulo}
                                    quantidade={livro.quantidadeDisponivel}
                                    sinopse={livro.sinopse}
                                    disabled={livro.quantidadeDisponivel === 0}
                                />
                            ))
                        ) : (
                            <div style={{ width: "100%", textAlign: "center", color: "#888", marginTop: 32 }}>
                                Nenhum livro encontrado.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acervo;