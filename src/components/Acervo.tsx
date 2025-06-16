import { useState } from 'react';
import './TBD.css'
import SidebarMenu from './SidebarMenu';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LivroMenuInterface from './LivroMenuInterface';

const livros = [
    { titulo: "Dom Casmurro", disabled: false },
    { titulo: "Memórias Póstumas", disabled: true },
    { titulo: "O Primo Basílio", disabled: true },
    { titulo: "Senhora", disabled: true },
    { titulo: "Iracema", disabled: true },
    { titulo: "A Moreninha", disabled: true },
    { titulo: "O Guarani", disabled: true },
    { titulo: "Capitães da Areia", disabled: true },
    { titulo: "Vidas Secas", disabled: true },
    { titulo: "O Cortiço", disabled: true },
    // ...adicione mais livros conforme necessário
];

function Acervo() {
    const [search, setSearch] = useState('');

    // Filtra os livros pelo título, ignorando maiúsculas/minúsculas e acentos
    const filteredLivros = livros.filter(livro =>
        livro.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .includes(
                search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            )
    );

    return (
        <div className="main-menu">
            <div className="top-bar">
                <div className="left">
                    <SidebarMenu />
                </div>
                <ul className="center">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/Acervo">Acervo Digital</a></li>
                    <li><a href="/Reserva">Reserva de Livros</a></li>
                    <li><a href="/Duvidas">Dúvidas</a></li>
                </ul>
                <div className="right">
                    <div className='icon'><InsertEmoticonIcon style={{ fontSize: 60 }} /></div>
                </div>
            </div>
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
                        {filteredLivros.length > 0 ? (
                            filteredLivros.map((livro, idx) => (
                                <LivroMenuInterface
                                    key={livro.titulo + idx}
                                    titulo={livro.titulo}
                                    disabled={livro.disabled}
                                />
                            ))
                        ) : (
                            <div style={{ width: "100%", textAlign: "center", color: "#888", marginTop: 32 }}> Nenhum livro encontrado. </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acervo;