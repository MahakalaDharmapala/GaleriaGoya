import React from 'react'
import './Stylesheet.css';
import Logo from './img/paypal.png';
import {useForm} from 'react-hook-form';

const Formulario2 = () =>{

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
    } 

    return(
        <div>
            <div className="contenedorFormulario">
                <section>
                    <h2>Contacto</h2>
                    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                        <fieldset>
                            <legend>Contactame</legend>
                            <div className="contenedor-campos">
                            <div className="campo">
                                <label>Nombre</label>
                                <input className="input-text nombre" type="text" placeholder="Nombre" 
                                required pattern="([A-zÀ-ž\s]){2,}"
                                {...register("nombre")}/>
                            </div>

                            <div className="campo">
                                <label>Teléfono</label>
                                <input className="input-text telefono" type="tel" 
                                placeholder="Teléfono (000-000-00-00)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" 
                                required
                                {...register("numero")}/>
                            </div>

                            <div className="campo">
                                <label>Correo</label>
                                <input className="input-text correo" type="email" placeholder="Email" required
                                {...register("correo")}/>
                            </div>

                            <div className="campo">
                                <label>Mensaje</label>
                                <textarea className="input-text mensaje" maxLength="120" {...register("mensaje")}></textarea>
                            </div>
            </div> 

            <div className="botones">
                <div className="alinear-derecha flex">
                    <input className="boton w-sm-100" type="submit" value="Enviar"/>
                </div>
                        
                <div className="botonPaypal">
                    <a href="https://www.paypal.com/donate?hosted_button_id=9SXXDVB3TYRAC">
                    <img src={Logo} alt="paypal"/></a>
                </div>
            </div>

            </fieldset>
        </form>
    </section>
    </div>
        </div>
        
    );
}

export default Formulario2;