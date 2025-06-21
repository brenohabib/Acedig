import SidebarMenu from "./SidebarMenu";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function TopBar() {
    return (
        <div className="top-bar">
            <div className="left">
                <SidebarMenu />
            </div>
            <ul className="center">
                <li><a href="/home">Home</a></li>
                <li><a href="/Acervo">Acervo Digital</a></li>
                {/* <li><a href="/Reserva">Reserva de Livros</a></li> */}
                <li><a href="/Duvidas">Dúvidas</a></li>
            </ul>
            <div className="right">
                <div className='icon'><InsertEmoticonIcon style={{ fontSize: 60 }} /></div>
            </div>
        </div>
    );
}

export default TopBar;
