import React from 'react';
import './SidebarUserComponent.css';
import emptyUSer from '../../assets/logos/ph_user-rectangle-thin.svg';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const SidebarUserComponent = () => {
const { onChangeLightBurguer} = React.useContext(StoreContext);   

  return (
      <section className='sidebar-user-component'>
        <img  className="sidebar-empty-user" src={emptyUSer}/>
        <h1 className='sidebar-user-tittle'>¿Aún no ingresas o no tienes perfil?</h1>
        <article className='sidebar-user-links'>
            <Link to="/ingresa" onClick={onChangeLightBurguer}>Ingresa</Link>
            <Link to="/registrate" onClick={onChangeLightBurguer}>Regístrate</Link>
        </article>
      </section>
  )
}

export default SidebarUserComponent
