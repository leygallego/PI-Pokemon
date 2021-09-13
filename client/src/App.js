import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Detalle from './components/Detalle';
import Crear from './components/Crear';


function App() {
  return (
    <div className="App">
      <Router>
        <Route  path="/" component={NavBar}></Route>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/detalle/:id" render={({ match }) => <Detalle id={match.params.id}/>} ></Route>
        <Route exact path="/crear" component={Crear}></Route>
      </Router>
    </div>
  );
}

export default App;

//component={Detalle}