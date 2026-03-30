import React from 'react';
import dot from '../assets/dot.png'
import { CiPlay1 } from 'react-icons/ci';
import bannerImage from '../assets/banner.png'
const Banner = () => {
    return (
        <div className='lg:w-10/12 mx-auto my-20 flex justify-between gap-10'>
            <div className='space-y-4 mt-20'>
                <button className='btn flex gap-2 items-center bg-[#E1E7FF] rounded-4xl px-4' >
                    <img src={dot} alt="dot" />
                    <span className='font-medium text-[16px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                </button>
                <h1 className='text-6xl leading-20 font-extrabold'>Supercharge Your<br></br> Digital Workflow</h1>
                <p className='text-[16px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br> software—all in one place. Start creating faster today.<br></br>Explore Products
                </p>
                <div className='flex gap-4 items-center'>
                    <button className='btn font-bold text-[16px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white'>Explore Products</button>
                    <button className='btn btn-primary btn-outline text-[16px] rounded-4xl'>
                        <CiPlay1/>
                        Watch Demo</button>
                </div>
            </div>
            <div>
              <img className='w-110' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;