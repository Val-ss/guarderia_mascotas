import React from 'react';
import '../componentes/Encuentra.css';

export default class Encuentra extends React.Component {

    render() {
        return(
            <div className='container pt-5 '>
                <div className='row mt-5 mb-5'> 
                    <h3 className='encabezado'>¿Nos ayudarías a encontrar un hogar que nos ame?</h3>
                    <p className='info d-none d-sm-flex px-4 pt-4 text'>En nuestra guardería también hay muchas mascotas esperando por ti.
                        Que buscan una familia amorosa y un hogar que los cuide.
                        ¡Ayúdalos a encontrar una familia que los ame!   
                    </p>  
                    
                    <div className="d-flex flex-column align-items-center">
                        <button className="my-4 btn btn-dark"> Leer Nuestras Historias </button>
                        <img src="/img/encuentra.jpg" alt="Imagen de animales" className="img-fluid" />
                    </div>
                </div>
            </div>
         
        )       
    }
}