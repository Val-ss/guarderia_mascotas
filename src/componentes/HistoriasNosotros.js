import React from "react";

export default class HistoriasNosotros extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render (){
        return (
            <>  
                <div className="container row mt-4 mb-5">
                    <div className="col-12 col-sm-6">
                        <img src={this.props.img} alt="imagen-perro" className="imagen-nosotros d-none d-sm-flex" />
                    </div>

                    <div className="col-12 col-sm-6 d-flex flex-column align-items-center">
                        <h6 className="subtitulo-nosotros mb-3">{this.props.titulo}</h6>
                        <p className="px-2 texto-descripcion">
                            {this.props.descripcion}
                        </p>
                    </div>
                </div>


            </>
        )
    }
}