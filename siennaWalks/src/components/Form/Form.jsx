// 📝 Formulario de registro
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Form.css';

export default function Form() {


    //Constantes para registrar y verificar el registro del usuario
  const {register, 
    handleSubmit,
     formState:{ errors},
   } = useForm();
  //LLamamos el contexto para verificar errores y registrarnos
   const {signup, errors: RegisterErrors, isRegister} = useAuth();
   const navigate = useNavigate();
  
   useEffect(()=>{
    //onChangeVisbility
    if (isRegister) navigate("/ingresa")
  },[isRegister])

  //Constante para enviar los datos y registrar el usuario
  const onSubmit = handleSubmit(async (values)=>{
    signup(values);
   
});

return (
    <section className='form-container'>
    <section className='form-container-tittle'> 
            <h1>Regístrate</h1> 
            <p>Permítenos saber más de tí, y no te pierdas de nuestras últimas novedades</p>
            {
                RegisterErrors.map((error,i)=>(
                    <div  key={i}>
                        {error}
                        </div>
                ))}
            <form className='form-sienna' onSubmit={onSubmit}>
                <label className='form-name'>
                    <span>Nombre</span>
                    <input type='text' name="name" {...register('name', {required: true})}/>
                    {errors.name?.message && (
                    <p>{errors.name?.message}</p>
                    )}
                </label>
                <label className='form-surname' >
                    <span>Apellido</span>
                    <input type='text' name="lastname"{...register('lastname', {required: true})}/>
                    {errors.lastname?.message && (
                    <p >{errors.lastname?.message}</p>
                    )}
                </label>
                <label className='form-email'>
                    <span>Correo</span>
                    <input type='email' {...register('email', {required: true})}/>
                    {errors.email?.message && (
                    <p >{errors.email?.message}</p>
                    )}
                </label>
                <label className='form-address'>
                    <span>Dirección</span>
                    <input type='text' {...register('address', {required: true})}/>
                    {errors.address?.message && (
                    <p >{errors.address?.message}</p>
                    )}
                </label>
                <label className='form-cellphone'>
                    <span>Teléfono</span>
                    <section className='form-cellphone-object'>
                        <input type='text' value={'+57'}/>
                        <input type='text' {...register('cellphone', {required: true})}/>
                    </section>
                    {errors.cellphone?.message && (
                    <p >{errors.cellphone?.message}</p>
                    )}
                </label>
                <label className='form-cities'>
                    <span>Ciudad</span>
                    <select  type="text" {...register('city', { required: true })} placeholder="Ciudad"  >
                        <option value="Bogotá">Bogotá</option>
                        <option value="Medellin">Medellin</option>       
                    </select>  
                </label>
                <label className='form-password'>
                    <span>Contraseña</span>
                    <input type='password' {...register('password', { required: true })}/>
                    {errors.password?.message && (
                    <p >{errors.password?.message}</p>
                    )}
                </label>
            <button type='submit' className='form-sienna-submit'>Regístrate</button>
    </form>
    </section>
    </section>
)
}
