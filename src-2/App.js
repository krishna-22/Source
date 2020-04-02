import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import Menu from './components/menu';
import {dishes} from './shared/dishes';

function App() {
  return (
    <div>
     <Navbar dark color='primary'>
       <div className="container" >
         <NavbarBrand href='/' >SAIKIRAN</NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes={dishes} />
     </div>
  );
}

export default App;
