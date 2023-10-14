import axios from "axios"
import swal from "@sweetalert/with-react"
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"

function Login(){
    const history = useHistory()
    let token = sessionStorage.getItem("token")
    
    useEffect(()=>{
        const token = sessionStorage.getItem("token")
        if (token != null){
            history.push("/listado")
        }
    },[])

    const submitHandler = e => {
        e.preventDefault()

        const regexEmail = /^(\<)?[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>)?(,|$)/

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        
        if (user.email == "" || user.password == ""){
            swal(<h2>Los campos no pueden estar vacíos</h2>)
            return
        }
        if(!regexEmail.test(user.email)){
            swal(<h2>Debe ingresar una dirección de email válido</h2>)
            return
        }
        if(user.email != "challenge@alkemy.org" || user.password != "react"){
            swal(<h2>Credenciales Inválidas</h2>)
            return
        }
        
        console.log("Estamos listos para enviar la información")
        axios.post("http://challenge-react.alkemy.org", user)
        .then(res => {
            swal(<h2>Usuario Logueado Correctamente</h2>)
            const {token} = res.data
            sessionStorage.setItem("token", token)
            history.push("/listado")
        })
    }

    return (
        <>
            { token && <Redirect to="/listado"/>}
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="password" placeholder="Password" />
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;