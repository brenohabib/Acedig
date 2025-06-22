import './SidebarMenu.css'
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sidebar-menu">
      <button
        className='sidebar-button'
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir menu lateral"
      >
        <AppsIcon style={{ fontSize: 60 }} color='action' />
      </button>
      {open && (
        <aside className="sidebar-drawer">
          <button
            className="sidebar-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu lateral"
          >
            <CloseIcon style={{ fontSize: 32 }} />
          </button>
          <nav>
            <ul>
  <li><a href="/home">Home</a></li>
  <li><a href="/acervo">Acervo</a></li>
  <li><a href="/duvidas">Dúvidas</a></li>
  {/* <li><a href="/reserva">Reserva</a></li> */}
  <li><a href="/adicionar-livro">adicionar livros</a></li>
</ul>
          </nav>
          <div className="sidebar-login-link">
            <a href="/login">Logout</a>
          </div>
        </aside>
      )}
    </div>
  );
}

export default SidebarMenu;