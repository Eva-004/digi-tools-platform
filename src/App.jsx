import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Products from './Components/Products/Products'
import Stats from './Components/Stats'
import GetStarted from './Components/GetStarted'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import ReadyWorkFlow from './Components/ReadyWorkFlow'
import { ToastContainer } from 'react-toastify'

const fetchProducts=async()=>{
  const res=await fetch('/data.json');
  return await res.json();
}
const productsPromise = fetchProducts();
function App() {

 const [cart,setCart] = useState([])
 
  return (
    <>
    <NavBar  cart={cart}></NavBar>
    <Banner></Banner>
    <Stats></Stats>
   
     <Products productsPromise={productsPromise } setCart={setCart} cart={cart}></Products>
 
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <ReadyWorkFlow></ReadyWorkFlow>
   <Footer></Footer>
     <ToastContainer />
    </>
  )
}

export default App
