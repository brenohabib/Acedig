import './LivroMenuInterface.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function LivroMenuInterface() {
    return (
        <button className="livro-menu-interface">
            <MenuBookIcon style={{ fontSize: 32, color: '#ffa686' }} />
            <div className="livro-titulo" style={{ fontWeight: 'bold', marginTop: 6 }}>Título do Livro</div>
            <div className="livro-qtd" style={{ fontSize: 12, color: '#888' }}>Qtd.: 3</div>
            <div className="livro-sinopse" style={{ fontSize: 11, marginTop: 6, textAlign: 'center' }}>
                Uma breve sinopse ou blurb do livro aparece aqui.
            </div>
        </button>
    );
}

export default LivroMenuInterface;