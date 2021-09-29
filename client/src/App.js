import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Detalle from './components/Detalle';
import Crear from './components/Crear';
import Busqueda from './components/Busqueda';
// import NameSearch from './components/NameSearch';


function App() {
  return (
    <div className="App">
      <Router>
        <Route  path="/" component={NavBar}></Route>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/detalle/:id" render={({ match }) => <Detalle id={match.params.id}/>} ></Route>
        {/* <Route exact path="/name/:name" render={({ match }) => <NameSearch id={match.params.name}/>} ></Route> */}
        <Route exact path="/crear" component={Crear}></Route>
        <Route exact path="/pokemon" component={Busqueda}></Route>

        
      </Router>
    </div>
  );
}

export default App;

//component={Detalle}