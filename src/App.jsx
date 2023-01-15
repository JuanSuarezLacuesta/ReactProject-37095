import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import CartContainer from './components/containers/CartContainer/CartContainer';

//-----bootstrap-----//
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css'


function App() {
  let saludo = 'WHATEVER YOU NEED FOR THE MOVIES BEGINS HERE'
  return (
    <main className='app'>
      <section className='mainContent'>
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
      </section>
    <Footer/>
    </main>
  )
}

export default App
