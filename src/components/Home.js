import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Container,Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import junko from '../junk-food.png'
import pastaa from '../pasta.png'
const Home = () =>{
    return(

<Carousel>
  <Carousel.Item>
    <img width={900} height={200}
      className="d-block h-100 w-100"
      src={junko}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pastaa}
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={junko}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
  
      
    )      
}
export default Home;