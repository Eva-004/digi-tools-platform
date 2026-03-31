import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import NavBar from './Components/NavBar'
import Products from './Components/Products/Products'
import Stats from './Components/Stats'
import GetStarted from './Components/GetStarted'
import Pricing from './Components/Pricing'

const fetchProducts=async()=>{
  const res=await fetch('/data.json');
  return res.json();
}

function App() {
const productsPromise = fetchProducts();
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Stats></Stats>
   <Suspense fallback={<p>loading.....</p>}>
     <Products productsPromise={productsPromise }></Products>
   </Suspense>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
    </>
  )
}

export default App
