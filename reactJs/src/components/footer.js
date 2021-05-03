import React from 'react'
import './Stylesheet.css';

const footer = () => {
    return (
        <div>
            <footer className="footer">
    <div>
    <p className="footer__texto1"> 
                Alumno: Duron de Luna Oscar  Alejandro 
                <br/> Instituto Tecnológico de Aguascalientes
                <br/> Materia: Programación Web 
                <br/> Proyecto: Aplicación en React: Galeria Goya - Caprichos
                <br/> Contacto: 18151661@aguascalientes.tecnm.mx</p>
    </div>

    <div>
        <p className="footer__texto2">
            IMPORTANTE: Esta página es simplemente un proyecto escolar, por lo tanto, ningúna pintura, video o grabado
            es propiedad del autor de esta página web. Este espacio es un simple proyecto de materia.
        </p>
    </div>
        <section className="footer__redsocial">
            <a href="https://www.youtube.com/channel/UC3_1hPsw4KzgXJQD8ClzZIA">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
            </a>
              <p className="redsocial__nom">YouTube /SimaQian</p>
        </section>

        <section className="footer__redsocial">
            <a href="https://github.com/MahakalaDharmapala">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
            </a>
              <p className="redsocial__nom">/Mahakala Dharmapala</p>
        </section>
</footer>
        </div>
    )
}

export default footer
