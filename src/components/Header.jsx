import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Buscador from "./Buscador"

function Header(){
    const token = sessionStorage.getItem("token")
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/listado">Listado</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                </ul>
            </nav>
            { token && <Buscador /> }
        </header>
    )
}

export default Header