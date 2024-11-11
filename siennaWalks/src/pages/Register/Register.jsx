import BurguerButton from "../../atoms/BurguerButton/BurguerButton";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import './Register.css';
import dragAndDropImage from '../../assets/logos/mage_image-download.svg';

const Register = () => {
  return (
    <>
      <section className="register-container">
        <BurguerButton buttonMode={false}/>
        <Link className="register-tittle-init" to="/"><h1>Sienna Walks</h1></Link>
        <h1 className="register-tittle-main">Regístrate</h1>
        <article className="register-global-nav">
          <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link to="/registrate">REGÍSTRATE</Link>
        </article>
      <form className="register-form">
        <label className='register-form-name'>
          <span>Nombre</span>
          <input type='text'/>
        </label>
        <label className='register-form-surname'>
          <span>Apellido</span>
          <input type='text'/>
        </label>
        <label className='register-form-email'>
          <span>Correo</span>
          <input type='email'/>
        </label>
        <label className='register-form-adress'>
          <span>Dirección</span>
          <input type='text'/>
        </label>
        <label className='register-cellphone'>
          <span>Teléfono</span>
            <section className='register-cellphone-object'>
              <input type='text' value={'+57'}/>
              <input type='text'/>
            </section>
        </label>
        <label className='register-cities'>
          <span>Ciudad</span>
          <input list='cities'/>
            <datalist>
              <option value={'Bogotá'}/>
              <option value={'Medellín'}/>
              <option value={'Cali'}/>
              <option value={'Barranquilla'}/>
            </datalist>    
        </label>
        <label className='register-form-password'>
          <span>Contraseña</span>
          <input type='password'/>
        </label>
        <div className="register-drag-and-drop-area">
          <p className="register-drag-description">Arrastra y suelta para subir la imagen de perfil</p>
          <img className="register-drag-image" src={dragAndDropImage}/>
          <label className="register-upload-button">
            <span >Subir archivo de imagen</span>
            <input type="file" className="register-upload-file"/>
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
