import React from 'react';
import "./Contenedor.css";

export default class Contenedor extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            escondido: true
        }
        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder(){
        this.setState(prevState => ({    
            escondido: !prevState.escondido
        }))
    }
    render() {
        return(

            <div className='row mb-3'>
                <div className="d-flex col-12 align-items-center">
                    <div>
                        <h4 className='pt-3 px-2'>{this.props.servicio}</h4>
                        <p className='texto-contenedor py-3 d-none d-sm-flex'>{this.props.descripcion}</p>
                        <div className={"container" + (this.state.escondido ? ' d-none' : '')}>
                          <p>{this.props.descripcionDos}</p>
                          <button type='button' className='btn btn-warning mb-2'>{this.props.botonDos}</button>
                        </div>

                        <button onClick={this.toggleEsconder} className='btn-custom btn mx-3'>
                            {this.state.escondido ? 'Mostrar más' : 'Mostrar menos'}
                         </button>
                    </div>

                    <img src={this.props.img} alt={this.props.nombre} className="imagen-contenedor" />
                </div>
                
            </div>
        
        )       
    }
}