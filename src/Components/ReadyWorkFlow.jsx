import React from 'react';

const ReadyWorkFlow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-25 text-center text-white space-y-10'>
            <div className='space-y-4'>
                <h2 className=' text-xl sm:text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
           <div className='space-y-4'>
             <div className='flex gap-4 justify-center'>
              <button className="btn bg-base-100 rounded-4xl  text-white font-bold "><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className='btn btn-outline rounded-4xl'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
           </div>
        </div>
    );
};

export default ReadyWorkFlow;