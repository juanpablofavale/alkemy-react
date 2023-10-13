import Login from "./components/Login";
import Listado from "./components/Listado";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/listado" component={Listado}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
