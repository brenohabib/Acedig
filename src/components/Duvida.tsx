import './TBD.css'
import SidebarMenu from './SidebarMenu';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function Duvida() {
    return (
        <>
            <div className="top-bar">
                <div className="left">
                    <SidebarMenu />
                </div>
                <ul className="center">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/Acervo">Acervo Digital</a></li>
                    <li><a href="/Duvidas">Dúvidas</a></li>
                </ul>
                <div className="right">
                    <div className='icon'><InsertEmoticonIcon style={{ fontSize: 60 }} /></div>
                </div>

            </div>
            <div className="tbd">
                <h1 style={{ textAlign: 'center', color: "black"}}>Perguntas </h1>
                <p style={{ textAlign: 'center', color: "black" }}>EM CONSTRUÇÂO.</p>

            </div>
        </>
    );
}

export default Duvida;  