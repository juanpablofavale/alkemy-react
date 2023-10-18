import { Link } from "react-router-dom"
import handleFavorite from "../utils/handleFavorite"

function Pelicula({ mov, setFavs }){
    const handleClick = (e) => {
        setFavs(handleFavorite(e))
    }

    return (
        <div className="card">
            {mov.poster_path ?
                <img src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} alt="" />
                :
                <img src={mov.imgURL} alt="" />
            }
            <button onClick={handleClick} className="favourite-btn" data-movie-id={mov.id}>🖤</button>
            <div className="card-body">
                <h3>{mov.title}</h3>
                <p>{mov.overview}</p>
                <Link to={"/detalles/" + mov.id}>Detalles</Link>
            </div>
        </div>
    )
}

export default Pelicula