import './LivroMenuInterface.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

interface LivroMenuInterfaceProps {
    titulo?: string;
    disabled?: boolean;
}

function LivroMenuInterface({ titulo = "Título do Livro", disabled = false }: LivroMenuInterfaceProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (disabled) return;
        const urlTitulo = encodeURIComponent(titulo.replace(/\s+/g, '-').toLowerCase());
        navigate(`/livro/${urlTitulo}`);
    };

    return (
        <button
            className={`livro-menu-interface${disabled ? ' livro-menu-interface-disabled' : ''}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <MenuBookIcon style={{ fontSize: 32, color: disabled ? '#bbb' : '#ffa686' }} />
            <div className="livro-titulo" style={{ fontWeight: 'bold', marginTop: 6 }}>{titulo}</div>
            <div className="livro-qtd" style={{ fontSize: 12, color: '#888' }}>Qtd.: 3</div>
            <div className="livro-sinopse" style={{ fontSize: 11, marginTop: 6, textAlign: 'center' }}>
                Uma breve sinopse ou blurb do livro aparece aqui.
            </div>
        </button>
    );
}
export default LivroMenuInterface;