import React, { useEffect } from "react";
  
export const useButtonBurguer = () =>{
  const [button,setButton] = React.useState(true);
  const buttonBurguerRef = React.useRef(null);
  const sidebarBurguerRef = React.useRef(null);

  /*funcion para cambiar  de boton de hamburguesa blanco a X oscuro*/
  const onChangeDarkBurguer = () =>{
    const burguerButtonNodes = buttonBurguerRef.current.querySelectorAll('div');
    const sidebarBurguerRefNodes = sidebarBurguerRef.current;
    let bodyClientWidth = document.body.clientWidth;
    
    if(bodyClientWidth<1280 ){  
      (button===true)?setButton(false):setButton(true);
      if(button){
        burguerButtonNodes[0].classList.replace("button-first-light-line","button-first-dark-change");
        burguerButtonNodes[1].classList.replace("button-second-light-line","button-second-dark-change");
        burguerButtonNodes[2].classList.replace("button-third-light-line","button-third-dark-change");
        sidebarBurguerRefNodes.classList.replace("sidebar","sidebar-change");
      }
      else{
        burguerButtonNodes[0].classList.replace("button-first-dark-change","button-first-light-line");
        burguerButtonNodes[1].classList.replace("button-second-dark-change","button-second-light-line");
        burguerButtonNodes[2].classList.replace("button-third-dark-change","button-third-light-line");
        sidebarBurguerRefNodes.classList.replace("sidebar-change","sidebar");
      }
    }
  }

  const onChangeLightBurguer = () =>{
    const burguerButtonNodes = buttonBurguerRef.current.querySelectorAll('div');
    const sidebarBurguerRefNodes = sidebarBurguerRef.current;
    let bodyClientWidth = document.body.clientWidth;
    
    if(bodyClientWidth<1280 ){  
      (button===true)?setButton(false):setButton(true);
      if(button){
        burguerButtonNodes[0].classList.replace("button-first-dark-line","button-first-dark-change");
        burguerButtonNodes[1].classList.replace("button-second-dark-line","button-second-dark-change");
        burguerButtonNodes[2].classList.replace("button-third-dark-line","button-third-dark-change");
        sidebarBurguerRefNodes.classList.replace("sidebar","sidebar-change");
      }
      else{
        burguerButtonNodes[0].classList.replace("button-first-dark-change","button-first-dark-line");
        burguerButtonNodes[1].classList.replace("button-second-dark-change","button-second-dark-line");
        burguerButtonNodes[2].classList.replace("button-third-dark-change","button-third-dark-line");
        sidebarBurguerRefNodes.classList.replace("sidebar-change","sidebar");
      }
    }
  }

  return {button,buttonBurguerRef,sidebarBurguerRef,onChangeDarkBurguer,onChangeLightBurguer}
}


