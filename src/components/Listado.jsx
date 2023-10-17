import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import swal from "@sweetalert/with-react"
import Pelicula from "./Pelicula"

function Listado({favs, setFavs}){
    const token = sessionStorage.getItem("token")
    const URL_API = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&api_key=25eb32f6790045e0ecc9f8da6ad3f735"
    //https://api.themoviedb.org/3/eJKmexmCLwuxOxlAURSMnBVkfmY.jpg
    //https://api.themoviedb.org/3/movie/movie_id?language=es-ES&api_key=25eb32f6790045e0ecc9f8da6ad3f735
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        axios.get(URL_API)
        .then(res => {
            setMoviesList(res.data.results)
        })
        .catch(err => {
            swal(<h2>Hubo errores. Intenta mas tarde</h2>)
            console.log(err)
        })
    },[])
    
    return (
        <>
            { !token && <Redirect to="/" /> }
            <h2>Peliculas</h2>
            <div className="fila">
                {
                    moviesList.length ?
                        moviesList.map(mov => <Pelicula key={mov.id} setFavs={setFavs} mov={mov} />)
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Listado