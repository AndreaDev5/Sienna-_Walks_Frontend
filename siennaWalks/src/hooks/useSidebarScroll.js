import { useState,useRef,useEffect } from "react"

const useSidebarScroll = () =>{
/*variables para el scroll*/
  let [scrollCount, setScrollCount] = useState(1);
  const startX = useRef(0);
  let [diffX, setDiffX] = useState(0);
  let [classContainer, setClassContainer] = useState('sidebar--car-first-container')

/*variables para los botones grises 🔘 */
  const firstButtonRef = useRef(null);
  const secondButtonRef = useRef(null);
  const thidrButtonRef = useRef(null);

 /*funcion de inicio para detectar la posicion donde toco la pantalla de 📲📲*/   
  const handleTouchStart = (e) =>{
    startX.current = e.touches[0].clientX;
  } 

/* funcion para establecer la diferencia entre donde toco la pantalla 
y la orientación del arrstre del dedo 📲*/   
  const handleTouchMove = (e) =>{
    const currentX = e.touches[0].clientX;
    setDiffX(startX.current - currentX);
  }
  
/*si se mueve a la izquierda, aumenta el contador de scroll en 1 ➡*/
/*si se mueve a la derecha, disminuye el contador de scroll en 1 ⬅*/
  const handleTouchEnd = () =>{
    if(diffX<0 && scrollCount>1){
      setScrollCount(scrollCount-1)
    }
    else if(diffX>0 && scrollCount<3){
      setScrollCount(scrollCount+1)
    }
  }

  useEffect(()=>{
    const firstButtonRefNode = firstButtonRef.current;
    const secondButtonRefNode = secondButtonRef.current;
    const thidrButtonRefNode = thidrButtonRef.current;
  
   switch (scrollCount) {
    case 1:
      setClassContainer('sidebar--car-first-container');
      firstButtonRefNode.classList.replace('first-button','first-dark-button')
      secondButtonRefNode.classList.replace('second-dark-button','second-button')
      thidrButtonRefNode.classList.replace('third-dark-button','third-button')
    break;
    case 2:
      setClassContainer('sidebar--car-second-movement')
      firstButtonRefNode.classList.replace('first-dark-button','first-button')
      secondButtonRefNode.classList.replace('second-button','second-dark-button')
      thidrButtonRefNode.classList.replace('third-dark-button','third-button')
    break;
    case 3:
      setClassContainer('sidebar--car-third-movement')
      firstButtonRefNode.classList.replace('first-dark-button','first-button')
      secondButtonRefNode.classList.replace('second-dark-button','second-button')
      thidrButtonRefNode.classList.replace('third-button','third-dark-button')
    break;
   }
  },[scrollCount])

  return { scrollCount,startX,diffX,classContainer,firstButtonRef,secondButtonRef,thidrButtonRef,
    handleTouchStart,handleTouchMove,handleTouchEnd,setScrollCount }
}

export { useSidebarScroll }