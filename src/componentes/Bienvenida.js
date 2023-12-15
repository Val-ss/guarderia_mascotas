import React from "react";
import "./Bienvenida.css";

export default class Bienvenida extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render (){
        return (
            <>  
               
                <div className="row d-flex py-4 bienvenida px-4" style={{ background: 'rgb(238, 88, 18) ', color: "white"}}>
                    <div className="col-md-6" >
                        <h6>Dime tu {this.props.dato}</h6>
                        <input type="text" placeholder={this.props.dato} className="form-control" />
                        <button type="button" className="btn btn-warning mt-2">
                            Enviar
                        </button>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> Instagram</p>
                        <p> Facebook</p>
                        <p> Telefono: 032 526 566</p>
                    </div>
                </div> 
            </>
        )
    }
}