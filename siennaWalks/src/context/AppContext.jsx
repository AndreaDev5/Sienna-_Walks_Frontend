import React from 'react'
import { StoreContext } from './StoreContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import AboutStore from '../pages/AboutStore/AboutStore';
import Register from '../pages/Register/Register';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import UserProfile from '../pages/UserProfile/UserProfile';

const AppContext = () => { 
  return (
    <StoreContext.Provider value='Gaolang Gonsawat'>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/colecciones'>
                  <Route path=':coleccion-1' element={<h1>Coleccion 1</h1>}/>  
                  <Route path=':coleccion-2' element={<h1>Coleccion 2</h1>}/>
                  <Route path=':coleccion-3' element={<h1>Coleccion 3</h1>}/>
            </Route>
            <Route path='/acerca-de-Sienna' element={<AboutStore/>}/>    
            <Route path='/ingresa' element={<Login/>}/>
            <Route path='/registrate' element={<Register/>}/>
            <Route path='/carrito-de-compras' element={<ShoppingCart/>}/>
            <Route path='/perfil' element={<UserProfile/>}/>
            <Route path="/editar-perfil"/>    
            </Routes>  
        </BrowserRouter>
    </StoreContext.Provider>
  )
}

export default AppContext
