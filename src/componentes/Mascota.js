import React from 'react';
import "../componentes/Mascota.css";
import { Link } from 'react-router-dom';



export default class Mascota extends React.Component {

    render() {
        return(
            <div className='container'>
                <div className="row my-4">
                    <div className="col-md-12 d-flex align-items-center ">
                        <img src={this.props.img} alt={this.props.nombre} className="imagen" />
                        <div className="px-3">
                            <h2>{this.props.titulo}</h2>
                            <p className='texto-mascota'>{this.props.descripcion}</p>
                            <button className="btn btn-dark px-5"> Ver </button>
                        </div>
                    </div>
                </div>  
            </div>    
        )
    }
}
