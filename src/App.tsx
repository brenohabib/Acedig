import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Acervo from './components/Acervo';
import Duvida from './components/Duvida';
import Reserva from './components/Reserva';
import Login from './components/Login';
import AdicionarLivros from './components/livros/AdicionarLivros';
import { LivroPlaceholder } from './components/livros/livrosPlaceholder';

// Componente principal da aplicação. Define as rotas de navegação usando React Router.
// Cada <Route> define uma página/component diferente do sistema.

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="Home" element={<MainMenu />} />
        <Route path="Acervo" element={<Acervo />} />
        <Route path="Duvidas" element={<Duvida />} />
        <Route path="Reserva" element={<Reserva />} />
        <Route path="adicionar-livro" element={<AdicionarLivros />} />
        <Route path="/livro/:id" element={<LivroPlaceholder />} />
        <Route path="*" element={<MainMenu />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
