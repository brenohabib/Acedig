import './SidebarMenu.css'
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';


function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [notificacoes, setNotificacoes] = useState<any[]>([]);
  const usuarioId = 1;

  useEffect(() => {
    if (open) {
      fetch(`http://localhost:8080/notificacoes?usuarioId=${usuarioId}&onlyNotLidas=false`)
        .then(res => res.json())
        .then(data => setNotificacoes(data))
        .catch(() => setNotificacoes([]));
    }
  }, [open]);

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
          <div style={{ margin: "16px 0 0 0", padding: "0 8px" }}>
            <b>Notificações:</b>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notificacoes.length === 0 && (
                <li style={{ color: "#888", fontSize: 13 }}>Nenhuma notificação.</li>
              )}
              {notificacoes.map((n) => (
                <li key={n.id} style={{
                  background: n.tipoNotificacao === "reserva" ? "#ffd381" : "#fff3e0",
                  color: "#b71c1c",
                  borderRadius: 6,
                  margin: "6px 0",
                  padding: "6px 10px",
                  fontSize: 13,
                  fontWeight: n.lida ? "normal" : "bold"
                }}>
                  {n.mensagem}
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-login-link">
            <a href="/login">Logout</a>
          </div>
        </aside>
      )}
    </div>
  );
}

export default SidebarMenu;