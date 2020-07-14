import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/navbar';
import Home from './components/home';
import Objectos from './components/objectos';
import { BrowserRouter , Route} from 'react-router-dom';

import firebase from './components/firebase';


//import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link} from 'react-router-dom';
import Object_detail from './components/object_detail';
import Objetos from './components/objectos';


firebase.firestore().collection('time').add(
  {
    title:'Joao Gomes'
  }
)


firebase.firestore().collection('utilizadores').get().then((snapshot) =>

snapshot.docs.forEach( doc => {
  console.log(doc.data())
})

)


class App extends Component {

  


  //function App() {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }





  render() {


    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
         <Home title="Home" /> 
      */


      <BrowserRouter>
        <div className="App">
          <Navbar title="React App" />
          <Route  exact path={"/"} render={() => <Home title="Home" />} />
          <Route  path="/objectos" render={() => <Object_detail title="Objecto" />} />
          
          <ul id="slide-out" className="sidenav">
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/objectos">Objectos</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
