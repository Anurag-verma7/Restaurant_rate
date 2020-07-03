
import React, { Component } from 'react';
import Navbar1 from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from './components/Footer';
import Cards from './components/Card';
import Search1 from './components/Search';
import Restaurant from './components/restaurant'
import Reg from './components/Signup'
import './App.css'
class App extends Component {
render(){
  return(
    <BrowserRouter>
    <div className="page-container">
    <div className="content-wrap">
        <Navbar1 />
        <Route exact path ="/" component={Home} />
        <Route path ="/restaurant" component={Restaurant} />
        <Route path ="/Signup" component={Reg} />
        
    </div>
    <Footer1 />
    </div>
    </BrowserRouter>
  );
}
}
export default App;