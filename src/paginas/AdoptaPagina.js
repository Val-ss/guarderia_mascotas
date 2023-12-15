import React from 'react';
import "../paginas/Adopta.css";

import Mascota from '../componentes/Mascota';



export default class AdoptaPagina extends React.Component {

    render() {
        return(
            <>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 d-flex justify-content-center'>
                            <img src='/img/adoptaGato.avif' className='imgadopta my-4' alt='Imagen de gato para adoptar' />
                        </div>
                        <div className='col-12 col-sm-6'>
                            <h1 className='titulo-adoptar'>¡Adoptá a tu mascota!</h1>
                            <p className='texto-adopta'>
                                En nuestro refugio, cada latido cuenta. Nos dedicamos a brindar amor y refugio a animales sin hogar, proporcionándoles una segunda oportunidad para vivir una vida llena de cariño y compañía. Cada adopción no solo transforma la vida de una mascota, sino que también enriquece el corazón y el hogar de quienes eligen abrir sus puertas a un nuevo amigo peludo.
                            </p>
                            <p className='texto-adopta'>
                                En nuestro refugio, cada latido cuenta. Nos dedicamos a brindar amor y refugio a animales sin hogar, proporcionándoles una segunda oportunidad para vivir una vida llena de cariño y compañía. Cada adopción no solo transforma la vida de una mascota, sino que también enriquece el corazón y el hogar de quienes eligen abrir sus puertas a un nuevo amigo peludo.
                            </p>
                        </div>
                    </div>
                </div>


                
               <Mascota
               titulo="Perritos"
               descripcion="¡Hazte amigo de cuatro patas y descubre el amor incondicional! En nuestra familia, cada perro espera 
               ansiosamente un hogar lleno de cariño. Adopta la alegría, adopta la lealtad, 
               ¡adopta a tu compañero peludo hoy!"
               img="/img/guarderia.jpg"
               />
                
               <Mascota 
               titulo ="Gatitos"
               descripcion="Descubre el encanto felino y da un giro amoroso a tu vida adoptando uno de nuestros adorables gatitos.
               Estos pequeños exploradores están listos para llenar tu hogar con pura alegría y afecto. ¡Adopta hoy!"
               img="/img/gatitos.jpg"
               />

              
                
            </>
        )
    }
}