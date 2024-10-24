import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <section className='form-container'>
       <section className='form-container-tittle'> 
            <h1>Regístrate</h1> 
            <p>Permítenos saber más de tí, y no te pierdas de nuestras últimas novedades</p>
            <form className='form-sienna'>
                <label className='form-name'>
                    <span>Nombre</span>
                    <input type='text'/>
                </label>
                <label className='form-surname'>
                    <span>Apellido</span>
                    <input type='text'/>
                </label>
                <label className='form-email'>
                    <span>Correo</span>
                    <input type='email'/>
                </label>
                <label className='form-address'>
                    <span>Dirección</span>
                    <input type='text'/>
                </label>
                <label className='form-cellphone'>
                    <span>Teléfono</span>
                    <section className='form-cellphone-object'>
                        <input type='text' value={'+57'}/>
                        <input type='text'/>
                    </section>
                </label>
                <label className='form-cities'>
                    <span>Ciudad</span>
                    <input list='cities'/>
                    <datalist>
                        <option value={'Bogotá'}/>
                        <option value={'Medellín'}/>
                        <option value={'Cali'}/>
                        <option value={'Barranquilla'}/>
                    </datalist>
                </label>
                <label className='form-password'>
                    <span>Contraseña</span>
                    <input type='password'/>
                </label>
            <button type='submit' className='form-sienna-submit'>Regístrate</button>
       </form>
       </section>
    </section>
  )
}
 