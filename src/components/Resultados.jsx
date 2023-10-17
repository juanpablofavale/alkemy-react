import axios from "axios"
import { useParams } from "react-router-dom"
import { Redirect } from "react-router-dom"
import swal from "@sweetalert/with-react"
import { useEffect, useState } from "react"
import Pelicula from "./Pelicula"

function Resultados({favs, setFavs}){
    const token = sessionStorage.getItem("token")
    const [pelicula, setPelicula] = useState([])
    const { search } = useParams()

    useEffect(()=>{
        const url = "https://api.themoviedb.org/3/search/movie?query=" + search + "&language=es-ES&api_key=25eb32f6790045e0ecc9f8da6ad3f735"
        axios.get(url)
        .then(res => {
            setPelicula(res.data.results)
            if (res.data.results.length == 0){
                swal(<h2>No existen peliculas con ese nombre!</h2>)
            }
        })
        .catch(err => {
            console.log(err)
            swal(<h2>Error</h2>)
        })
        return (setPelicula([]))
    },[search])

    return (
        <>
            { !token && <Redirect to="/" /> }
            <h2>Resultados - {search}</h2>
            <div className="fila">
                { pelicula.length != 0 ?
                    pelicula.map(mov => <Pelicula key={mov.id} setFavs={setFavs} mov={mov} />)
                    :
                    <h3>No hay Resultados!</h3>
                }
            </div>
        </>
    )
}

export default Resultados