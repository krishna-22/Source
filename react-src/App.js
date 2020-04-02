import React from 'react';
import {Navbar, NavbarBrand,Jumbotron,address} from 'reactstrap'
import './App.css';
import Main from './components/MainComponent';
import {dishes} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <div id="parent">
        <Main />
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
