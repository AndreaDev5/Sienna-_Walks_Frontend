import BurguerButton from "../../atoms/BurguerButton/BurguerButton"
import Footer from "../../components/Footer/Footer";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import {jwtDecode} from "jwt-decode"
import './Login.css';


const Login = () => {

  const {register, 
    handleSubmit, 
    formState: {errors},
    } = useForm();
  
  const {login, errors: loginErrors, isAuthenticated, token} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data)=>{
    login(data);
    });

  useEffect (()=>{
  
  if (isAuthenticated && token) {
    console.log(token)
    const decodedToken = jwtDecode(token); // Decodificamos el token
    console.log(decodedToken)
    if (decodedToken.role === 'admin') {
        navigate('/admin'); // Redirigir a la página específica
    } else {
        navigate('/perfil'); // Redirigir a la página de usuarios
    }
  }
  }, [isAuthenticated, token, navigate]);

  return (
    <>
    <section className="login-container">
      <BurguerButton buttonMode={false}/>
      <Link className="login-tittle-init" to="/"><h1>Sienna Walks</h1></Link>
      <h1 className="login-tittle-main">Ingresa</h1>
      <article className="login-global-nav">
        <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link to="/ingresa">INGRESA</Link>
      </article>

      {
                loginErrors.map((error,i)=>(
                    <div className="bg-red-500 p-2 text-white text-center" key={i}>
                        {error}
                        </div>
                ))
            }
      <form className="login-form" onSubmit={onSubmit}>
        <label className='login-form-name'>
          <span>Nombre</span>
          <input type='email' {...register('email', {required: true})}/>
          {errors.email?.message && (
                <p className="text-red-500">{errors.email?.message}</p>
                )}
        </label>
        <label className='login-form-password'>
          <span>Contraseña</span>
          <input type="password"  {...register('password', {required: true})}  />
          {errors.password?.message && (
                <p className="text-red-500">{errors.password?.message}</p>
                )}
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
