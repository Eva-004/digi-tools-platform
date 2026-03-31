import React, { use, useState } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise,handleTotalCart}) => {
   const productsData = use(productsPromise)
   const [cart,setCart] = useState([])
    
    return (
        <div className='w-10/12 mx-auto mb-30'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-3xl font-bold text-[#101727] '>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
                <div className='flex gap-2 justify-center '>
                        <button className='btn text-[16px] font-bold rounded-4xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md'>Products</button>
                    <button className='btn text-[16px] font-medium border-0 rounded-4xl'>Cart ({cart.length})</button>
                </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    productsData.map(product => <ProductCard key={product.id} product={product} setCart={setCart} cart={cart} handleTotalCart={handleTotalCart}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;