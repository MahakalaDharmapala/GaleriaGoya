import React from 'react';
import './Stylesheet.css';

const NavBar = () => {
    return ( 
        <div>
            <header className="header"> 
                <a href="index.html"><h1 className="header__titulo animate__animated animate__fadeInDown">Galeria Goya</h1></a>
            </header>

            <nav className="navegacion">
                {/* <a href="index.html" className="navegacion__enlace ">Inicio</a> */}
                <a href="https://www.realacademiabellasartessanfernando.com/es/goya/goya-en-la-calcografia-nacional/caprichos/" className="navegacion__enlace ">Caprichos completos</a>
            </nav>
        </div>
     );
}
 
export default NavBar;