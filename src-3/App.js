import React from 'react';
import {Navbar, NavbarBrand,Jumbotron,address} from 'reactstrap'
import './App.css';
import Menu from './components/menu';
import {dishes} from './shared/dishes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
     <Navbar dark color='primary'>
       <div className="container" >
         <NavbarBrand href='/' >SAIKIRAN</NavbarBrand>
       </div>
     </Navbar>
     <Jumbotron>
       <div className="container">
         <div className="row row header">
           <div className="col-12 col-sm-6">
             <h1>cricket</h1>
             <p>He is world best</p>
           </div>
         </div>
       </div>
     </Jumbotron>
     <Menu dishes={dishes} />
     <div class="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br></br>
		              Clear Water Bay, Kowloon<br></br>
		              HONG KONG<br></br>
		              <i class="fa fa-phone fa-lg"></i>Tel.: +852 1234 5678<br></br>
		              <i class="fa fa-fax fa-lg"></i>Fax: +852 8765 4321<br></br>
		              <i class="fa fa-envelope fa-lg"></i>Email: <a href="mailto:confusion@food.net">confusion@food.net</a>
		            </address>
                </div>
                <div class="col-12 col-sm-4 align-self-center">
                    <div class="text-center">
                        <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-google" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                    </div>
                    </div>

    
  );
}

export default App;
