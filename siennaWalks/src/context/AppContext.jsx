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
import Header from '../components/Header/Header';
import { useButtonBurguer } from '../hooks/useButtonBurguer';

const AppContext = () => {
  const { button,buttonBurguerRef,sidebarBurguerRef,onChangeDarkBurguer,onChangeLightBurguer} = useButtonBurguer();

  return (
    <StoreContext.Provider value={{button,buttonBurguerRef,sidebarBurguerRef,onChangeDarkBurguer,onChangeLightBurguer}}> 
        <BrowserRouter>
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
        </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default AppContext
