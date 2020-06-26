import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import junko from '../junk-food.jpg'
import pastaa from '../pasta.jpg'
import sweet from '../sweets.jpg'
const Home = () =>{
    return(

<Carousel>
  <Carousel.Item>
    <img 
      className="h-100 w-100"
      src={junko}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-100 w-100"
      src={pastaa}
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-100 w-100"
      src={sweet}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
  
      
    )      
}
export default Home;