import logo from './logo.svg';
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import AdoptaPagina from './paginas/AdoptaPagina';
import NosotrosPagina from './paginas/NosotrosPagina';
import Lanzamientos from './paginas/Lanzamientos';
import Footer from './componentes/Footer';

import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


import Menu from './componentes/Menu';





function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container">  
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/adopta" element={<AdoptaPagina />} />
            <Route path="/nosotros" element={<NosotrosPagina />} />
            <Route path="/lanzamientos" element={<Lanzamientos />} />
          </Routes>        
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
