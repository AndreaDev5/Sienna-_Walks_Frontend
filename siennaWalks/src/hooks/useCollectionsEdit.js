// 📦 Importación de librerías, componentes y recursos
import React, { useRef } from 'react';

const useCollectionsEdit = () =>{
    const containerRef = useRef(null);

  // ⬅️ Mover el carrusel hacia la derecha
  const onChangeRight = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3;
    const containerRefNode = containerRef.current;
    containerRefNode.scrollBy({
      left: totalScroll,
      behavior: "smooth" 
    });
  };

  // ➡️ Mover el carrusel hacia la izquierda
  const onChangeLeft = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3; 
    const containerRefNode = containerRef.current;
    containerRefNode.scrollBy({
      left: -totalScroll,
      behavior: "smooth" 
    });
  };
  
  const images = [
    new URL('../assets/images/coleccion-1.jpg', import.meta.url).href,
    new URL('../assets/images/coleccion-2.jpg', import.meta.url).href,
    new URL('../assets/images/coleccion-3.jpg', import.meta.url).href,
    new URL('../assets/images/coleccion-4.jpg', import.meta.url).href,
    new URL('../assets/images/coleccion-5.png', import.meta.url).href,
    new URL('../assets/images/coleccion-6.png', import.meta.url).href,
    new URL('../assets/images/coleccion-7.png', import.meta.url).href,
  ];

  return { containerRef,onChangeRight,onChangeLeft,images }
}

export { useCollectionsEdit }