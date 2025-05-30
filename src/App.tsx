import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Acervo from './components/Acervo';
import Duvida from './components/Duvida';
import Reserva from './components/Reserva';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<MainMenu />} />
        <Route path="Acervo" element={<Acervo />} />
        <Route path="Duvidas" element={<Duvida />} />
        <Route path="Reserva" element={<Reserva />} />

        <Route path="*" element={<MainMenu />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
