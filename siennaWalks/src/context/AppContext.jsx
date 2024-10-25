import React from 'react'
import { StoreContext } from './StoreContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import AboutStore from '../pages/AboutStore/AboutStore';
import Register from '../pages/Register/Register';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import UserProfile from '../pages/UserProfile/UserProfile';
import EditUSerProflie from '../pages/EditUserProfile/EditUSerProflie';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import Whatsapp from '../atoms/WhatsApp/Whatsapp';
import BurguerButton from '../atoms/BurguerButton/BurguerButton';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const AppContext = () => {
  const [button,setButton] = React.useState(true);
  const buttonBurguerRef = React.useRef(null);
  const sidebarBurguerRef = React.useRef(null);
  
    const onChangeBurguer = () =>{
      const burguerButtonNodes = buttonBurguerRef.current.querySelectorAll('div');
      const sidebarBurguerRefNodes = sidebarBurguerRef.current;
      let bodyClientWidth = document.body.clientWidth; 
      console.log(bodyClientWidth)
      
      if(bodyClientWidth<1280){
        (button===true)?setButton(false):setButton(true)
      
        if(button){
          burguerButtonNodes[0].classList.replace("button-first-line","button-first-line-change");
          burguerButtonNodes[1].classList.replace("button-second-line","button-second-line-change");
          burguerButtonNodes[2].classList.replace("button-third-line","button-third-line-change");
          sidebarBurguerRefNodes.classList.replace("sidebar","sidebar-change");
        }
        else{
          burguerButtonNodes[0].classList.replace("button-first-line-change","button-first-line");
          burguerButtonNodes[1].classList.replace("button-second-line-change","button-second-line");
          burguerButtonNodes[2].classList.replace("button-third-line-change","button-third-line");
          sidebarBurguerRefNodes.classList.replace("sidebar-change","sidebar");
        }
      }
    }

  return (
    <StoreContext.Provider value={{button,buttonBurguerRef,sidebarBurguerRef,onChangeBurguer}}> 
        <BrowserRouter>
        <BurguerButton/>
        <Whatsapp/>
        <Sidebar/>
        <Header/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/colecciones'>
                  <Route path=':eclat-eternel' element={<h1>Eclat Éternel</h1>}/>  
                  <Route path=':l`aura-majestueuse' element={<h1>L'Aura Majestueuse</h1>}/>
                  <Route path=':velours-divin' element={<h1>Velours Divin</h1>}/>
                  <Route path=':heritage-d`or' element={<h1>Héritage d'Or</h1>}/>
                  <Route path=':opulence-sauvage' element={<h1>Opulence Sauvage</h1>}/>
                  <Route path=':noir-elegance' element={<h1>Noir Élégance </h1>}/>
                  <Route path=':ciel-de-minuit' element={<h1>Ciel de Minuit</h1>}/>
            </Route>
            <Route path='/acerca-de-Sienna' element={<AboutStore/>}/>    
            <Route path='/ingresa' element={<Login/>}/>
            <Route path='/registrate' element={<Register/>}/>
            <Route path='/carrito-de-compras' element={<ShoppingCart/>}/>
            <Route path='/perfil' element={<UserProfile/>}/>
            <Route path="/editar-perfil" element={<EditUSerProflie/>}/>    
            <Route path='/admin' element={<AdminDashboard/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default AppContext
