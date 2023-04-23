import {Link} from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/alta">Registro</Link></li>
      <li><Link to="/contador">Contador</Link></li>
      <li><Link to="/detalle">Detalle</Link></li>
    </ul>
  );
}

export default NavBar;