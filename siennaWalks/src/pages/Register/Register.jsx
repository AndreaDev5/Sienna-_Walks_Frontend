import BurguerButton from "../../atoms/BurguerButton/BurguerButton";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import './Register.css';
import dragAndDropImage from '../../assets/logos/mage_image-download.svg';
import { useEffect, useRef, useState } from "react";

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

  useEffect(()=>{
    onChangeVisbility
  })


  /*funciones para crear usuario*/ 
  const createUser = (e) =>{
    e.preventDefault();
    const form = e.target;

    const userData = {
      name: form.name.value,
      lastname: form.lastname.value,
      email: form.email.value,
      password: form.password.value,
      cellphone: form.cellphone.value,
      address: form.address.value,
      city: form.city.value,
      image: form.image.value
    }

    console.log(userData)

    //probar la url de cargar datos de usuario
   const url = 'http://localhost:3000/api/register';

   fetch(url,{
    method: "POST",
    body: JSON.stringify(userData),
    headers:{
      "Content-Type": "application/json",
    },
   })
   .then((res)=> res.json())
   .catch((error)=> console.error("Error: ",error ))
   .then((response)=>console.log("Success", response))
  }  




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
       {/*formulario para el registro de usuario */} 
      <form className="register-form" onSubmit={createUser}>
        <label className='register-form-name'>
          <span>Nombre</span>
          <input type='text' name="name"/>
        </label>
        <label className='register-form-surname'>
          <span>Apellido</span>
          <input type='text' name="lastname"/>
        </label>
        <label className='register-form-email'>
          <span>Correo</span>
          <input type='email' name="email"/>
        </label>
        <label className='register-form-adress'>
          <span>Dirección</span>
          <input type='text' name="address"/>
        </label>
        <label className='register-cellphone'>
          <span>Teléfono</span>
          <input type='text' name="cellphone"/>
        </label>
        <label className='register-cities'>
          <span>Ciudad</span>
          <input list='cities' name="city"/>
            <datalist>
              <option value={'Bogotá'}/>
              <option value={'Medellín'}/>
              <option value={'Cali'}/>
              <option value={'Barranquilla'}/>
            </datalist>    
        </label>
        <label className='register-form-password'>
          <span>Contraseña</span>
          <input  ref={passwordVisibiltyRef} type={passwordTypeRef} name="password"/>
          <span className="register-visibility-hidden"  onClick={onChangeVisbility}></span>
        </label>
        <div className="register-drag-and-drop-area" onDrop={handleDropImage}>
          <p className="register-drag-description">Arrastra y suelta para subir la imagen de perfil</p>
          <img className="register-drag-image" src={dragAndDropImage}/>
          <label className="register-upload-button" >
            <span >Subir archivo de imagen</span>
            <input type="file" className="register-upload-file" name="image"/>
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
