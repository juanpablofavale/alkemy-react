import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Pelicula from "./Pelicula"

function Favoritos({favs, setFavs}){
    const token = sessionStorage.getItem("token")

    return (
        <>
            { !token && <Redirect to="/" /> }
            <h2>Favoritos</h2>
            <div className="fila">
                {
                    favs.length ?
                        favs.map(mov => <Pelicula key={mov.id} setFavs={setFavs} mov={mov} />)
                    :
                        <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Favoritos