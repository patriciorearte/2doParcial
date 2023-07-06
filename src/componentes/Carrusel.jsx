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
                    <h3>Salud digital: Una estrategia de continuidad asistencial para personas con enfermedades no transmisibles durante la COVID-19</h3>
                    <p>Las enfermedades no transmisibles (ENT) son la principal causa de muerte y discapacidad en todo el mundo. El manejo efectivo de estas condiciones crónicas depende en servicios continuos y el autocuidado. La salud digital puede garantizar la continuidad de la atención, especialmente cuando los servicios se interrumpen.</p>
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
                    <h3>Hojas informativas COVID-19</h3>
                    <p>La telerehabilitación se incorpora a la respuesta a la pandemia de COVID-19 a fin de facilitar la continuidad de la atención de los pacientes que puedan beneficiarse de consultas remotas, y de garantizar así una mayor protección de los grupos en situación de vulnerabilidad.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              
    </Carousel>
    );
}
 
export default Carrusel;