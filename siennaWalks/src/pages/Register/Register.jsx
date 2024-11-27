import BurguerButton from "../../atoms/BurguerButton/BurguerButton";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import dragAndDropImage from '../../assets/logos/mage_image-download.svg';
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  /*variables de control del input contraseña*/
  const passwordVisibiltyRef = useRef('null');
  const [passwordTypeRef,setPasswordTypeRef] = useState('password')

  /*funcion para cambiar la visibilidad de la contraseña*/
  const onChangeVisbility = () =>{
    const passwordNode = passwordVisibiltyRef.current;
    const passwordIcon = passwordNode.nextElementSibling;

    if(passwordTypeRef==='password'){
      setPasswordTypeRef('text')
      passwordIcon.classList.replace('register-visibility-hidden','register-visibility-shown')
    }
    else{
      setPasswordTypeRef('password')
      passwordIcon.classList.replace('register-visibility-shown','register-visibility-hidden')
    }
  } 
  //Constantes para registrar y verificar el registro del usuario
  const {register, 
    handleSubmit,
     formState:{ errors},
   } = useForm();
  //LLamamos el contexto para verificar errores y registrarnos
   const {signup, errors: RegisterErrors, isRegister} = useAuth();
   const navigate = useNavigate();
  
   useEffect(()=>{
    onChangeVisbility
    if (isRegister) navigate("/ingresa")
  },[isRegister])

const onSubmit = handleSubmit(async (values) => {

  const user = new FormData();
  user.append('name', values.name);
  user.append('lastname', values.lastname);
  user.append('email', values.email);
  user.append('password', values.password);
  user.append('cellphone', values.cellphone);
  user.append('address', values.address);
  user.append('city', values.city);
  //user.append('image', values.image[0]);

    if (values.image && values.image[0]) {
      user.append('image', values.image[0]);
    } else {
      console.log("No se ha seleccionado una imagen");
    }
     
    console.log('Datos enviados:', Array.from(user.entries())); // Imprime los datos
  try {
    signup(user);
  }
      catch (error) {
      console.error('Error al subir archivo:', error);
  }
});


   /*funcion para arrastrar y soltar la imagen*/
   const [profileImage,setProfileImage] = useState(null);

   /*funcion de arrastrar y soltar una imagen */
   const handleDragOver = (e) =>{
    e.preventDefault();
   }

   const handleDrop = (e) =>{
    e.preventDefault();
   }

   const handleDropImage = (e) =>{
    e.preventDefault();
    const fileImg = e.dataTransfer.files[0];
    console.log(fileImg)
   }
   
  return (
    <>
      <section className="register-container" onDragOver={handleDragOver}>
        <BurguerButton buttonMode={false}/>
        <Link className="register-tittle-init" to="/"><h1>Sienna Walks</h1></Link>
        <h1 className="register-tittle-main">Regístrate</h1>
        <article className="register-global-nav">
          <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link to="/registrate">REGÍSTRATE</Link>
        </article>
        {
                RegisterErrors.map((error,i)=>(
                    <div  key={i}>
                        {error}
                        </div>
                ))
            }
       {/*formulario para el registro de usuario */} 
      <form className="register-form" onSubmit={onSubmit}>
        <label className='register-form-name'>
          <span>Nombre</span>
          <input type='text' name="name" {...register('name', {required: true})}/>
          {errors.name?.message && (
            <p>{errors.name?.message}</p>
          )}
        </label>
        {errors.name?.message && (
            <p>{errors.name?.message}</p>
          )}
        <label className='register-form-surname'>
          <span>Apellido</span>
          <input type='text' name="lastname" {...register('lastname', {required: true})}/>
          {errors.lastname?.message && (
            <p >{errors.lastname?.message}</p>
          )}
        </label>
        <label className='register-form-email'>
          <span>Correo</span>
          <input type='email' name="email" {...register('email', {required: true})}/>
          {errors.email?.message && (
            <p >{errors.email?.message}</p>
          )}
        </label>
        <label className='register-form-adress'>
          <span>Dirección</span>
          <input type='text' name="address" {...register('address', {required: true})}/>
          {errors.address?.message && (
            <p >{errors.address?.message}</p>
          )}
        </label>
        <label className='register-cellphone'>
          <span>Teléfono</span>
          <input type='text' name="cellphone" {...register('cellphone', {required: true})}/>
          {errors.cellphone?.message && (
            <p >{errors.cellphone?.message}</p>
          )}
        </label>
        <label className='register-cities'>
          <span>Ciudad</span>
          <select  type="text" {...register('city', { required: true })} placeholder="Ciudad"  >
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellin">Medellin</option>
                  
          </select>   
        </label>
        <label className='register-form-password'>
          <span>Contraseña</span>
          <input  ref={passwordVisibiltyRef} type={passwordTypeRef} name="password" {...register('password', { required: true })}/>
          <span className="register-visibility-hidden"  onClick={onChangeVisbility}></span>
          {errors.password?.message && (
            <p >{errors.password?.message}</p>
          )}

        </label>
        
        <div className="register-drag-and-drop-area" onDrop={handleDropImage}>
        <p className="register-drag-description">Arrastra y suelta para subir la imagen de perfil</p>
        <img className="register-drag-image" src={dragAndDropImage}/>
        <label className="register-upload-button" >
            <span >Subir archivo de imagen</span>
            <input className="register-upload-file" aria-label="Username" aria-describedby="basic-addon1" type="file" {...register('image')} placeholder="Foto de perfil" />
            </label>
          <p className="register-upload-addition">*Recuerda subir archivos en formato .png .jpg o .jpeg</p>
        </div>

        <button type="submit" className="register-submit">Regístrate</button>
      </form>

      <article className="register-tittle">
        <div className="register-tittle-line"></div>
        <h1>¿Ya estás registrada?</h1>
        <div className="register-tittle-line"></div>
      </article>
      <Link to="/ingresa" className="register-login-link">Ingresa</Link>
      </section>
      <Footer footerBackground={'#f9f9f9'} footerMarginTop={"1.6rem"}/>
    </>
  )
}

export default Register
