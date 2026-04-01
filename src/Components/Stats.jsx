import React from 'react';

const Stats = () => {
    return (
        <div className=' px-30 md:px-35 py-12 flex flex-col md:flex-row  justify-evenly gap-4 md:gap-8 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mb-30'>
            <div className='space-y-2'>
                <h1 className='text-4xl font-extrabold text-white '>50K+</h1>
                <p className='text-lg font-medium text-white'>Active Users</p>
            </div>
            <div className='border-t md:border-l border-white'></div>
            <div>
                <h1 className='text-4xl font-extrabold text-white '>200K+</h1>
                <p className='text-lg font-medium text-white'>Premium Tools</p>
            </div>
             <div className='border-t md:border-l border-white'></div>
            <div>
                <h1 className='text-4xl font-extrabold text-white '>4.9</h1>
                <p className='text-lg font-medium text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;