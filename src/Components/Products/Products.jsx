import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise}) => {
   const productsData = use(productsPromise)
 
    return (
        <div className='lg:w-10/12 mx-auto'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className='text-3xl font-bold '>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
                <div className='flex gap-2 justify-center '>
                        <button className='btn text-[16px] font-bold rounded-4xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md'>Products</button>
                    <button className='btn text-[16px] font-medium border-0 rounded-4xl'>Cart (2)</button>
                </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    productsData.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;