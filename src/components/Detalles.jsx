import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Redirect } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import swal from "@sweetalert/with-react"

function Detalles(){
    const [pelicula, setPelicula] = useState(null)
    const token = sessionStorage.getItem("token")
    const {id} = useParams()

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/" + id + "?language=es-ES&api_key=25eb32f6790045e0ecc9f8da6ad3f735")
        .then(res => {
            setPelicula(res.data)
        })
        .catch(err => {
            swal(<h2>Hubo errores. Intenta mas tarde</h2>)
            console.log(err)
        })
    },[])

    return(
        <>
            { !token && <Redirect to="/" />}
            { !pelicula ?
                <h2>Cargando...</h2>
            :
                <>
                    <h2>{pelicula.title}</h2>
                    <br />
                    <h3>Titulo original: {pelicula.original_title}</h3>
                    <br />
                    <img src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path} alt=""/>
                    <br /><br />
                    <div className="datos">
                        <div>
                            <h3>Generos</h3>
                            <ul>
                                {pelicula.genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3>Estreno</h3>
                            <p>{pelicula.release_date}</p>
                        </div>
                    </div>
                    <br />
                    <h3>Sinopsis</h3>
                    <p>{pelicula.overview}</p>
                    <br />
                </>
            }
        </>
    )
}

export default Detalles