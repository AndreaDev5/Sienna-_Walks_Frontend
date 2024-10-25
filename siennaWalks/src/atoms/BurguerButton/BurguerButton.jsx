// 🍔 Componente de botón de hamburguesa

import './BurguerBotton.css';
import React from 'react';
import { StoreContext } from '../../context/StoreContext';


const BurguerButton =  () => {
  // 🎛️ Extrae las referencias y funciones necesarias desde el contexto
    const {buttonBurguerRef,onChangeBurguer } = React.useContext(StoreContext);
  
    return(
      <article className='button-burguer' ref={buttonBurguerRef} onClick={onChangeBurguer}>
        <div className='button-first-line'></div>
        <div className='button-second-line'></div>
        <div className='button-third-line'></div>
      </article>
    )
  }

  export default BurguerButton;