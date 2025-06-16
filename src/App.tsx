import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Acervo from './components/Acervo';
import Duvida from './components/Duvida';
import Reserva from './components/Reserva';
import Login from './components/Login';
import { LivroPlaceholder } from './components/livros/livrosPlaceholder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="Home" element={<MainMenu />} />
        <Route path="Acervo" element={<Acervo />} />
        <Route path="Duvidas" element={<Duvida />} />
        <Route path="Reserva" element={<Reserva />} />
        <Route path="livro/:titulo" element={<LivroPlaceholder />} />
        <Route path="*" element={<MainMenu />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
