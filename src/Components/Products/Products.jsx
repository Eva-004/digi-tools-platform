import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import SelectedProducts from '../SelectedProducts';
import cartIcon from '../../assets/products/cart.jpg'
import { toast } from 'react-toastify';

const Products = ({productsPromise,setCart,cart}) => {
   const productsData = use(productsPromise)
  
    const [selected, setSelected] = useState('products')
    const [totalAmount,setTotalAmount] = useState(0)
    const handleRemove = (cartProduct) =>{
          const filteredProducts = cart.filter(item => item.id !== cartProduct.id)
          setCart(filteredProducts)
         setTotalAmount(totalAmount - cartProduct.price)
         toast('Remove cart successfully')
    }
    const handleProceed =()=>{
        setCart([])
        toast.success('Proceed to checkout successfully')
    }
    return (
        <div className='w-10/12 mx-auto mb-30'>
            <div className='text-center space-y-4 mb-10'>
                <h2 className=' text-2xl sm:text-3xl font-bold text-[#101727] '>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px] md:px-75'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex gap-2 justify-center '>
                        <button onClick={()=> setSelected('products')} className={`btn text-[16px] rounded-4xl ${selected == 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md text-white font-bold' : 'font-medium border-0 '}`}>Products</button>
                    <button onClick={()=> setSelected('cart')} className={`btn text-[16px] rounded-4xl ${selected == 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-md text-white font-bold' : 'font-medium border-0 '}`}>Cart ({cart.length})</button>
                </div>
            </div>
            {
                selected =='products' ? <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    productsData.map(product => <ProductCard key={product.id} product={product} setCart={setCart} cart={cart} totalAmount={totalAmount} setTotalAmount={setTotalAmount}  ></ProductCard>)
                }
            </div> : <div className='card card-body shadow-sm'>
                <h2 className='text-[#101727] font-bold text-2xl mb-4'>Your Cart</h2>
                {
                    cart.length ===0 ? <div>
                        <div className='flex justify-center items-center'>
                            <img src={cartIcon} className='w-20' alt="" />
                        </div>
                        <p className='text-[#627382] text-center'>Your cart is empty</p>
                    </div> 
                    : <div>
                        {
                            cart.map(cartProduct => <SelectedProducts key={cartProduct.id} cartProduct={cartProduct} handleRemove={handleRemove} ></SelectedProducts>)
                        }
                        <div className='flex justify-between mt-4'>
                            <p className='text-[#627382]'>Total:</p>
                            <h2 className='text-2xl font-bold'>${totalAmount}</h2>
                        </div>
                        <div onClick={handleProceed} className='mt-4'>
                             <button className="btn bg-base-100 rounded-4xl btn-block text-white font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] ">Proceed to Checkout</button>
                        </div>
                    </div>
                }
            </div>
            }
        </div>
    );
};

export default Products;