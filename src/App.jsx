import logo from './logo.svg';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Contador from './Pages/Contador';
import Registro from './Pages/Registro';
import Detalle from './Pages/Detalle';
import NavBar from './Components/NavBar';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Registro />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/producto/:id" element={<Detalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
