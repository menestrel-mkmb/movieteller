import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return(
    <header className="App-header">
        <Link to="/movieteller/">
            <h1 className={"site__title logo__title header__title"}>
                Movieteller <span className={"full-name__span"}>Notes</span>
            </h1>
        </Link>
        <nav className={"menu__nav menu"}>
            <Link to="/movieteller/">Início</Link>
            <Link to="/movieteller/favorites">Favoritos</Link>
            <Link to="/movieteller/watchlater">Assistir mais tarde</Link>
        </nav>
    </header>);
}