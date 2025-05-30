import './MainMenu.css'
import SidebarMenu from './SidebarMenu'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LivroMenuInterface from './LivroMenuInterface';

function MainMenu() {
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
            <div className='welcome'>
                <h1>Bem vindo ao ACEDIG</h1>
            </div>
            <div className='main'>

                <div className='livros'>
                    <h3>Livros Populares</h3>
                    <div className='livros-lista'>
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                        <LivroMenuInterface />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainMenu;