import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Carrusel = () => {
    return (  
    <Carousel className='my-5 mx-5 px-5 '>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4M9gtnAig8tdlGSOHy2LjLp3WMS0bEpjaw&usqp=CAU"
                    alt="First slide"
                    width="80px" height="280px" 
                  />
                  <Carousel.Caption>
                    <h3>Abajo tendra informacion acerca COVID-19</h3>
                    <p>Informacion de todos los estados de los EE.UU</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJWACIaClq5ZzlERFYb8wYxEsQPepYoEL7Q&usqp=CAU"
                    alt="Second slide"
                    width="80px" height="280px" 
                  />

                  <Carousel.Caption>
                    <h3>Abajo tendra informacion acerca COVID-19</h3>
                    <p>Tendra informacion actulizada como: casos postivos ,numeros de fallecidos y muertes.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              
    </Carousel>
    );
}
 
export default Carrusel;