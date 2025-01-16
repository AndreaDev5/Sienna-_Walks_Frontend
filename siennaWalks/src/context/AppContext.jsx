import React from 'react'
import { StoreContext, HeaderContext, SidebarAllProductsContext } from './StoreContext';
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
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { useButtonBurguer } from '../hooks/useButtonBurguer';
import { useSidebarScroll } from '../hooks/useSidebarScroll';
import { useToggleButtons } from '../hooks/useToggleButtons';
import { useSidebarFilterScroll } from '../hooks/useSidebarFilterScroll';
import { useFilterProducts } from '../hooks/useFilterProducts';
import AllProducts from '../pages/AllProducts/AllProducts';
import SidebarFilter from '../components/SidebarFilter/SidebarFilter';
import ProtectRoute from '../pages/ProtectedRoute/ProtectRoute';
import { AuthProvider } from './AuthContext';
import Collection from '../pages/Collections/Collection';

const AppContext = () => {
  /*variables para el boton de hamburguesa*/ 
  const { button,buttonBurguerRef,sidebarBurguerRef,onChangeDarkBurguer,onChangeLightBurguer} = useButtonBurguer();

  /*variables para el scroll vertical del sidebar*/
  const { scrollCount,startX,diffX,classContainer,firstButtonRef,secondButtonRef,thidrButtonRef,
    handleTouchStart,handleTouchMove,handleTouchEnd,setScrollCount } = useSidebarScroll();
  
  /*variables para la sección de usuario y carrito de compras en header*/  
 const { cartComponent,setCartComponent,userComponent,setUserComponent,toggleCartComponent,toggleUserComponent,toggleUSerCart } =useToggleButtons();  

 /*variables para el sidebar de todos los productos*/
 const { sidebarFilter, onChangeSidebarFilter, filterCollectionRef, onChangeFilterCollection, arrowRef, filterSizesRef, onChangeFilterSizes,
  arrowSizesRef, filterColorRef, onChangeColorSizes, arrowColorRef}   = useSidebarFilterScroll();
 
  /*variables para el filtro de productos*/
  const { productList,toggleFilters,filteredProducts } = useFilterProducts();

  //console.log(filteredProducts);


  return (
    <StoreContext.Provider value={{button,buttonBurguerRef,sidebarBurguerRef,onChangeDarkBurguer,onChangeLightBurguer,
      scrollCount,startX,diffX,classContainer,firstButtonRef,secondButtonRef,thidrButtonRef,
      handleTouchStart,handleTouchMove,handleTouchEnd,setScrollCount}}>
        <HeaderContext.Provider value={{cartComponent,setCartComponent,userComponent,setUserComponent,toggleCartComponent,toggleUserComponent,toggleUSerCart}}>
          <SidebarAllProductsContext.Provider value={{sidebarFilter, onChangeSidebarFilter, filterCollectionRef, onChangeFilterCollection, arrowRef, filterSizesRef,
            onChangeFilterSizes,arrowSizesRef,filterColorRef, onChangeColorSizes, arrowColorRef,productList,toggleFilters,filteredProducts }}>
          <AuthProvider>
          <BrowserRouter>
          <SidebarFilter/>
          <Whatsapp/>
          <Sidebar/>
          <Header/>
          <main onClick={toggleUSerCart}>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/colecciones'>
                  <Route path=':eclat-eternel' element={<Collection collectionTittle='Eclat Éternel'/>}/>  
                  <Route path=':l`aura-majestueuse' element={<Collection collectionTittle='L`aura Majestueuse'/>}/>
                  <Route path=':velours-divin' element={<Collection collectionTittle='Velours divin'/>}/>
                  <Route path=':heritage-d`or' element={<Collection collectionTittle='Heritage D`or'/>}/>
                  <Route path=':opulence-sauvage' element={<Collection collectionTittle='Opulence Sauvage'/>}/>
                  <Route path=':noir-elegance' element={<Collection collectionTittle='Noir elegance'/>}/>
                  <Route path=':ciel-de-minuit' element={<Collection collectionTittle='Ciel de Minuit'/>}/>
            </Route>
            <Route path='/acerca-de-Sienna' element={<AboutStore/>}/>    
            <Route path='/ingresa' element={<Login/>}/>
            <Route path='/registrate' element={<Register/>}/>
            <Route path='/carrito-de-compras' element={<ShoppingCart/>}/>
            <Route element={<ProtectRoute/>}>
            <Route path='/perfil' element={<UserProfile/>}/>
            <Route path="/editar-perfil" element={<EditUSerProflie/>}/>    
            <Route path='/admin' element={<AdminDashboard/>}/>
            </Route>
            <Route path="/ver-productos" element={<AllProducts/>}/>
            </Routes>
          </main>    
        </BrowserRouter>
        </AuthProvider>
        </SidebarAllProductsContext.Provider>
        </HeaderContext.Provider>
    </StoreContext.Provider>
  )
}

export default AppContext
