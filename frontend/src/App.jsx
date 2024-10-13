import React from 'react'
import { Routes,Route } from 'react-router-dom'
import home from './pages/home'
import collection from './pages/collection'
import about from './pages/about'
import contact from './pages/contact'
import poduct from './pages/Product'
import cart from './pages/cart'
import login from './pages/login'
import placeorder from './pages/placeorder'
import orders from './pages/orders'
import navbar from './components/navbar'
import Footer from './components/footer'
import searchbar from './components/searchbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div  className='px-4 sm:px-[5vw] md:px-[7w] lg:px-[9w]'>
      <navbar />
      <Routes>
            <Route path='/' element={<home/>}   />
            <Route path='/collection' element={<collection/>}  />
            <Route path='/about' element={<about/>}  />
            <Route path='/contact' element={<contact/>} />
            <Route path='/product/:productId' element={<product/>} />
            <Route path='/card' element={<card/>} />
            <Route path='/login'element={<login/>} />
            <Route path='/placeorder'element={<placeorder/>} />
            <Route path='/orders' element={<orders/>} />
      </Routes>
    </div>
  )
}

export default App
