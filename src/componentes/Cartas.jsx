import React from 'react'
import Card from 'react-bootstrap/Card';
const Cartas = (props) => {
  const {listaDeEstados} =props;  
  return ( 
    <div className='row'>
      {
        listaDeEstados.map((item,index)=>(
          <div key={index} className='col mb-4'>
            <Card style={{ width: '18rem' ,height:'12rem' }}>
                      <Card.Body>
                                  <Card.Title>Estado {item.state}</Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">ultima modificacion:{item.lastUpdateEt}</Card.Subtitle>
                                  <Card.Text>
                                    Informacion de muertes:{item.death}.
                                    <br />hospitalizados:{item.hospitalized}. 
                                    <br />
                                    nuevos positivos:{item.positive}.<br />
                                  
                                  </Card.Text>
                                 
                      </Card.Body>
              </Card>

          </div>
        ))

      }
    </div>
              
         
     );
}
 
export default Cartas;
