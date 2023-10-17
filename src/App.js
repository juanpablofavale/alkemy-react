import Login from "./components/Login";
import Listado from "./components/Listado";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalles from "./components/Detalles";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import { useEffect, useState } from "react";


function App() {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")))
  },[])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/listado"  render={() => <Listado favs={favs} setFavs={setFavs} />}/>
        <Route path="/favoritos" render={() => <Favoritos favs={favs} setFavs={setFavs} />}/>
        <Route path="/detalles/:id" component={Detalles}/>
        <Route path="/resultados/:search" render={() => <Resultados favs={favs} setFavs={setFavs} />}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
