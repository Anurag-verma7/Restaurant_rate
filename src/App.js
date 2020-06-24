import React, { Component } from 'react';
import Navbar1 from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from './Footer';
class App extends Component {
render(){
  return(
    <BrowserRouter>
    <div className="App">
        <Navbar1 />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Footer1 />
    </div>
    </BrowserRouter>
  );
}
}
export default App;