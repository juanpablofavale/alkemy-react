import swal from "@sweetalert/with-react"
import { useHistory } from "react-router-dom"

function Buscador(){
    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        const search = e.currentTarget.search.value.trim()
        if (search.length == 0){
            swal(<h2>Debe Escribir una Palabra Clave</h2>)
        }else if(search.length < 4){
            swal(<h2>Debe Escribir al menos cuatro letras</h2>)
        }else{
            e.currentTarget.search.value = ""
            history.push('/resultados/' + search)
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="search" placeholder="Nombre de la Pelicula"/>
            <button>Buscar</button>
        </form>
    )
}

export default Buscador