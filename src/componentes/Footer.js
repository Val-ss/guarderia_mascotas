import React from "react";
import Bienvenida from './Bienvenida';
import "./Footer.css";




export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render (){
        return (
            <>  
                <footer className="row container-fluid footer">
                   <div className='d-flex col-12 justify-content-center pt-4' style={{color: "white"}}>
                      <h4>Suscribite a nuestras noticias</h4>
                   </div>
                   <Bienvenida dato="correo electronico" />
                </footer>
            </>
        )
    }
}    