import React from 'react';
import './Hero.css';
import logo from '../../assets/logos/last-logo-sienna.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [button,setButton] = React.useState(true)
  const buttonBurguerRef = React.useRef(null);
  
  const onChangeBurguer = () =>{
    const burguerButtonNodes = buttonBurguerRef.current.querySelectorAll('div');
    (button===true)?setButton(false):setButton(true)
    
    if(button){
      /*cambios a primera linea */
      burguerButtonNodes[0].classList.replace("button-first-line","button-first-line-change");
      burguerButtonNodes[1].classList.replace("button-second-line","button-second-line-change");
      burguerButtonNodes[2].classList.replace("button-third-line","button-third-line-change");
    }
    else{
      burguerButtonNodes[0].classList.replace("button-first-line-change","button-first-line");
      burguerButtonNodes[1].classList.replace("button-second-line-change","button-second-line");
      burguerButtonNodes[2].classList.replace("button-third-line-change","button-third-line");
    }

  }  
  
  return (
    <section className='hero' >
      <article className='button-burguer' ref={buttonBurguerRef} onClick={onChangeBurguer}>
            <div className='button-first-line'></div>
            <div className='button-second-line'></div>
            <div className='button-third-line'></div>
      </article>
      <img className='hero-logo-sienna' src={logo}/>
      <h1 className='hero-logo-cta'>En cada paso que das llevas contigo un pedazo de tu escencia, elige un calzado que refleje tu estilo y te acompañe en tu aventura</h1>
      <Link className='hero-whatsapp-contact'>Ver más</Link>
    </section>
  )
}

export default Hero
