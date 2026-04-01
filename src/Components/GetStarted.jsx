import React from 'react';
import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'
const GetStarted = () => {
    return (
        <div className=' bg-base-200 py-20 md:py-30'>
            <div className='text-center'>
                <h2 className='font-extrabold text-2xl md:text-4xl text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-10/12 mx-auto'>
                <div className="card bg-base-100 shadow-sm ">
                    <div className="card-body relative">
                        <div className='p-2 absolute top-3 right-3 font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 flex items-center justify-center'>01</div>
                        <div className='my-12 text-center space-y-3'>
                            <div className='flex items-center justify-center '><img className='p-3  w-16 bg-base-300 rounded-full' src={userIcon} alt="" /></div>
                            <h3 className='text-2xl font-bold  text-[#101727]'>Create Account</h3>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm ">
                    <div className="card-body relative">
                        <div className='p-2 absolute top-3 right-3 font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 flex items-center justify-center'>02</div>
                        <div className='my-12 text-center space-y-3'>
                            <div className='flex items-center justify-center '><img className='p-3  w-16 bg-base-300 rounded-full' src={packageIcon} alt="" /></div>
                            <h3 className='text-2xl font-bold  text-[#101727]'>Choose Products</h3>
                            <p className='text-[#627382]'>Browse our catalog and select the tools <br></br>that fit your needs.</p>

                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-sm ">
                    <div className="card-body relative">
                        <div className='p-2 absolute top-3 right-3 font-bold text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 flex items-center justify-center'>03</div>
                        <div className='my-12 text-center space-y-3'>
                            <div className='flex items-center justify-center '>
                                <div className='bg-base-300 rounded-full p-3  h-16 w-16'>
                                    <img  src={rocketIcon} alt="" />
                                </div>
                            </div>
                            <h3 className='text-2xl font-bold  text-[#101727]'>Start Creating</h3>
                            <p className='text-[#627382]'>Download and start using your premium <br></br>tools immediately.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;