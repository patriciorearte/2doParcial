import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Fragment, useEffect, useState } from 'react'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Cartas from './componentes/Cartas';

import './App.css';

function App() {

  const [lista,setlista]=useState([]);
  
  
  useEffect(()=>{
    consultarApi()
  },[]);

 
  const consultarApi= async()=> 
  {
    try{
      const api = await fetch("https://api.covidtracking.com/v1/states/current.json")
      const resultado= await api.json();
      setlista(resultado);
      console.log(resultado);
      
    }
    catch(error){console.log(error);}
  }

  return (
    <Fragment>
      <Header></Header>
            <div className='container mt-5'>
                <Cartas
                  listaDeEstados={lista}
                ></Cartas>
            </div>
            
            
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
