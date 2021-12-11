import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import '../styles/nav.css'

const Nav = ({onSearch}) => {
  return (
    <nav className="navbar bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" width="30" height="30" className="d-inline-block align-top" alt="" />
          Conexiones Libreria
        </span>
      </Link>
      <Link to='/about'>
        <span className="span-nav"><b>About</b></span>
      </Link>
        <SearchBar onSearch={onSearch}/>
    </nav>

  );
};

export default Nav;
