import React from 'react';
import Contenedor from '../componentes/Contenedor';
import Encuentra from '../componentes/Encuentra';






export default class InicioPagina extends React.Component {

    render() {
        return(
            <>    
               <Encuentra /> 
                
                <Contenedor 
                    servicio="Mantenimientos"
                    img="/img/corte_pelo2.avif" 
                    descripcion="Lorem ipsum dolor sit amet,Duis auctor magna at urna laoreet, imperdiet vehicula diam volutpat.
                     In maximus eget lorem sit amet rhoncus. Vestibulum pellentesque et neque ac egestas. Ut magna metus, 
                     varius ut commodo ut, commodo eget ligula."
                    descripcionDos="orem ipsum dolor sit amet, consectetur adipiscing elit. Duis nibh metus, dictum at aliquam eget, faucibus quis nunc. Aenean mollis ultrices nisi, non vestibulum arcu vulputate nec. Aliquam nunc eros, posuere non metus at, vulputate varius massa. Mauris iaculis euismod est, ac auctor quam consequat eget. Aliquam laoreet urna at 
                    quam mattis commodo. Ut lobortis quam magna, at pulvinar quam accumsan ac. Sed at nisl hendrerit, ."
                    botonDos ="Agendar"
                />
                
                <Contenedor 
                    servicio="Entrenamientos"
                    img="/img/entrenamientos.jpg" 
                    descripcion="Lorem ipsum dolor sit amet,Duis auctor magna at urna laoreet, imperdiet vehicula diam volutpat.
                     In maximus eget lorem sit amet rhoncus. Vestibulum pellentesque et neque ac egestas. Ut magna metus, 
                     varius ut commodo ut, commodo eget ligula."
                    descripcionDos="Vestibulum pellentesque et neque ac egestas. Ut magna metus, 
                    varius ut commodo ut, commodo eget ligula.Vestibulum pellentesque et neque ac egestas. Ut magna metus, 
                    varius ut commodo ut, commodo eget ligula."
                    botonDos ="Agendar"
                />

               
               
                    
            </>
                       
        )
    }
}