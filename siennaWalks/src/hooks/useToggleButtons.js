import { useState } from "react";

const useToggleButtons = () =>{
    const [cartComponent, setCartComponent] = useState(false);
    const [userComponent, setUserComponent] = useState(false);

const toggleCartComponent = () =>{
        setCartComponent(!cartComponent);       
        userComponent && setUserComponent(false);
    }

const toggleUserComponent = () =>{
        setUserComponent(!userComponent);
        cartComponent && setCartComponent(false);
    }

const toggleUSerCart = () =>{
    const bodyWith = document.body.clientWidth;
    if(bodyWith>=1280){
        setUserComponent(false);
        setCartComponent(false)
    }
}
    
  return {cartComponent,setCartComponent,userComponent,setUserComponent,toggleCartComponent,toggleUserComponent,toggleUSerCart}  
}

export { useToggleButtons }