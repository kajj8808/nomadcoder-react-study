import { Link } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">🍿</Link>
      </nav>
    </header>
  );
}

export default Header;
