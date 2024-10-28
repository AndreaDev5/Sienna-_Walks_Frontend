import BurguerButton from "../../atoms/BurguerButton/BurguerButton"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import './Login.css';


const Login = () => {
  return (
    <>
    <section className="login-container">
      <BurguerButton buttonMode={false}/>
      <Link className="login-tittle-init" to="/"><h1>Sienna Walks</h1></Link>
      <h1 className="login-tittle-main">Ingresa</h1>
      <article className="login-global-nav">
        <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link to="/ingresa">INGRESA</Link>
      </article>
      <form className="login-form">
        <label className='login-form-name'>
          <span>Nombre</span>
          <input type='email'/>
        </label>
        <label className='login-form-password'>
          <span>Contraseña</span>
          <input type='email'/>
        </label>
        <button type="submit" className="login-submit">Ingresa</button>
      </form>
      <article className="login-tittle">
        <div className="login-tittle-line"></div>
        <h1>¿Aún no te registras?</h1>
        <div className="login-tittle-line"></div>
      </article>
      <Link to={'/registrate'} className="form-register-link">Regístrate</Link>
    </section>
    <Footer footerBackground={'#f9f9f9'} footerMarginTop={"12.3rem"}/>
    </>
  )
}

export default Login
