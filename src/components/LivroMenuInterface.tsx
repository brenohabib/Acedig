import './LivroMenuInterface.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';

interface LivroMenuInterfaceProps {
    id: number; // Adicione o id do livro
    titulo: string;
    disabled?: boolean;
    quantidade?: number;
    sinopse?: string;
}

function LivroMenuInterface({ id, titulo, disabled = false, quantidade = 0, sinopse = "" }: LivroMenuInterfaceProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (disabled) return;
        navigate(`/livro/${id}`); // Use o id real do livro
    };

    return (
        <button
            className={`livro-menu-interface${disabled ? ' livro-menu-interface-disabled' : ''}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <MenuBookIcon style={{ fontSize: 32, color: disabled ? '#bbb' : '#ffa686' }} />
            <div className="livro-titulo" style={{ fontWeight: 'bold', marginTop: 6 }}>{titulo}</div>
            <div className="livro-qtd" style={{ fontSize: 12, color: '#888' }}>Qtd.: {quantidade}</div>
            <div className="livro-sinopse" style={{ fontSize: 11, marginTop: 6, textAlign: 'center' }}>
                {sinopse || "Uma breve sinopse ou blurb do livro aparece aqui."}
            </div>
        </button>
    );
}
export default LivroMenuInterface;