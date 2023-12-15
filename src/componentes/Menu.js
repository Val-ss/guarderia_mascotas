import React from 'react';
import "./Menu.css";
import { Link } from 'react-router-dom';



export default class Menu extends React.Component {

    render() {
        return(
            <div className='row menu py-3 fixed-top px-1'>
                <div className='col-sm-6 d-flex align-items-center'>
                    <h2 className='px-4 title'>PET SHOP</h2>
                    <Link to="/" className='px-4 enlace title'>Inicio</Link>
                    <Link to="/nosotros" className='px-4 enlace title'>Nosotros</Link>
                    <Link to="/adopta" className='px-4 enlace title'>Adopta</Link>
                    <Link to="/lanzamientos" className='px-4 enlace title'>Lanzamientos</Link>
                </div>
            </div>       
        )
    }
}