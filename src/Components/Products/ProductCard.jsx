import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <div className="card  bg-base-100 shadow-sm">   
            <div className="card-body relative space-y-2">
                <span className={`badge badge-sm 
                    ${product.tagType==='popular' ? 'badge-warning' : product.tagType==='new' ? 'badge-accent' : 'badge-success'}
                    font-bold absolute top-2 right-2`}>{product.tagType}</span>
                    <div className=' w-15 h-15 flex justify-center items-center bg-base-200 rounded-full'><img className='h-8  w-8'  src={product.icon} alt="" /></div>
                    <h2 className="text-xl font-bold text-[#101727]">{product.name}</h2>
                    <p className='text-[#627382]'>{product.description}</p>
                    <h2 className='font-bold text-2xl'>${product.price}<span className='font-normal text-[16px] text-[#627382]'>/{product.period}</span></h2>
                <ul className=" flex flex-col gap-2 text-xs">
                    {
                        product.features.map(feature => <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>{feature}</li>)
                    }
                </ul>
                <div className="">
                    <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl btn-block text-white font-bold ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;