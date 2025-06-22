import React, { useEffect, useState } from 'react';
import './MainMenu.css'
import TopBar from './TopBar';
import LivroMenuInterface from './LivroMenuInterface';

function MainMenu() {
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

    return (
        <div className="main-menu">
            <TopBar />
            <div className='welcome'>
                <h1>Bem vindo ao ACEDIG</h1>
            </div>
            <div className='main'>
                <div className='livros'>
                    <h3>Livros Populares</h3>
                    <div className='livros-lista'>
                        {loading ? (
                            <div style={{ color: "#888" }}>Carregando livros...</div>
                        ) : livros.length > 0 ? (
                            livros.map((livro, idx) => (
                                <LivroMenuInterface
    id={livro.id}
    titulo={livro.titulo}
    quantidade={livro.quantidadeDisponivel}
    sinopse={livro.sinopse}
    disabled={livro.quantidadeDisponivel === 0}
/>
                            ))
                        ) : (
                            <div style={{ color: "#888" }}>Nenhum livro encontrado.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;