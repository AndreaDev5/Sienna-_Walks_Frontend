// 🍔 Componente de botón de hamburguesa

import './BurguerBotton.css';
import React, { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const BurguerButton =  ({buttonMode}) => {
  // 🎛️ Extrae las referencias y funciones necesarias desde el contexto
    const {buttonBurguerRef,onChangeDarkBurguer,onChangeLightBurguer } = React.useContext(StoreContext);
    const [darkButtonMode,lightButtonMode] = React.useState(buttonMode);

      if(darkButtonMode){
        return(
          <article className='button-burguer' ref={buttonBurguerRef} onClick={onChangeDarkBurguer}>
            <div className='button-first-light-line'></div>
            <div className='button-second-light-line'></div>
            <div className='button-third-light-line'></div>
          </article>
        )
      }
      else{
        return(
          <article className='button-burguer' ref={buttonBurguerRef} onClick={onChangeLightBurguer}>
            <div className='button-first-dark-line'></div>
            <div className='button-second-dark-line'></div>
            <div className='button-third-dark-line'></div>
          </article>
        )
      }
  }

  export default BurguerButton;