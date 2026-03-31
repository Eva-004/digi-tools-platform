import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Products from './Components/Products/Products'
import Stats from './Components/Stats'
import GetStarted from './Components/GetStarted'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

const fetchProducts=async()=>{
  const res=await fetch('/data.json');
  return await res.json();
}

function App() {
const productsPromise = fetchProducts();
 const [cartCount,setCartCount] = useState(0)
 const handleTotalCart=(totalCart)=>{
  setCartCount(totalCart)
 }
  return (
    <>
    <NavBar cartCount={cartCount}></NavBar>
    <Banner></Banner>
    <Stats></Stats>
   <Suspense fallback={<p>loading.....</p>}>
     <Products productsPromise={productsPromise } handleTotalCart={handleTotalCart}></Products>
   </Suspense>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <Footer></Footer>
    </>
  )
}

export default App
