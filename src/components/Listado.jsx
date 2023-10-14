import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min"
import swal from "@sweetalert/with-react"

function Listado(){
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
            <div className="fila">
                {
                    moviesList.length ?
                    moviesList.map(mov => {
                        return (
                            <div className="card" key={mov.id}>
                                <img src={"https://image.tmdb.org/t/p/w500" + mov.poster_path} alt="" />
                                <div className="card-body">
                                    <h5>{mov.title}</h5>
                                    <p>{mov.overview}</p>
                                    <Link to={"/detalles/" + mov.id}>Detalles</Link>
                                </div>
                            </div>
                        )
                    })
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </>
    )
}

export default Listado