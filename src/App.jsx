import { useState } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';

//-----bootstrap-----//
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartContainer from './components/containers/CartContainer/CartContainer';
import CartWidget from './components/CartWidget/CartWidget';

import './App.css'
import { CartContextProvider } from './context/CartContext';


function App() {
  let saludo = 'WHATEVER YOU NEED FOR THE MOVIES BEGINS HERE'
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>

      <Routes>
      
        <Route path='/' element={<ItemListContainer greeting = {saludo}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting = {saludo}/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='*' element={<Navigate to='/'/> }/>

      </Routes>
  
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
