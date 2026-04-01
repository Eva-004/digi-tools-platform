import React from 'react';
import { FaCheck } from 'react-icons/fa';
const Pricing = () => {
    return (
        <div className='w-10/12 mx-auto my-30'>
            <div className='mb-10 text-center space-y-4'>
                <h2 className='font-extrabold text-xl sm:text-2xl md:text-5xl text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
               <div className="card-body relative space-y-2 bg-base-200 rounded-2xl">
                                 
                                 <div className='space-y-1'>
                                    <h2 className="text-xl font-bold text-[#101727]">Starter</h2>
                                  <p className='text-[#627382]'>Perfect for getting started</p>
                                 </div>
                                  <h2 className='font-bold text-2xl'>$0<span className='font-normal text-[16px] text-[#627382]'>/Month</span></h2>
                              <ul className=" flex flex-col gap-2 text-xs">
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Access to 10 free tools</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Basic templates</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Community support</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>1 project per month</li>
                              </ul>
                              <div className="mt-13">
                                  <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl btn-block text-white font-bold ">Get Started Free</button>
                              </div>
                </div>
               <div className="card-body  relative space-y-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">
                                 
                                 <span className='badge badge-warning absolute -top-2 right-20 md:right-26'>Most Popular</span>

                                 <div className='space-y-1'>
                                    <h2 className="text-xl font-bold text-white">Starter</h2>
                                  <p className='text-white'>Perfect for getting started</p>
                                 </div>
                                  <h2 className='font-bold text-2xl text-white'>$29<span className='font-normal text-[16px] text-white'>/Month</span></h2>
                              <ul className=" flex flex-col gap-2 text-xs">
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Access to all premium tools</li>
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Unlimited templates</li>
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Priority support</li>
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Unlimited projects</li>
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Cloud sync</li>
                                  <li className='text-white font-medium flex gap-2 items-center'> <FaCheck className='text-white'/>Advanced analytics</li>
                              </ul>
                              <div className="">
                                  <button className="btn bg-base-100 rounded-4xl btn-block text-white font-bold "><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                              </div>
                </div>
               <div className="card-body relative space-y-2 bg-base-200 rounded-2xl">
                                 
                                 <div className='space-y-1'>
                                    <h2 className="text-xl font-bold text-[#101727]">Enterprise</h2>
                                  <p className='text-[#627382]'>For teams and businesses</p>
                                 </div>
                                  <h2 className='font-bold text-2xl'>$99<span className='font-normal text-[16px] text-[#627382]'>/Month</span></h2>
                              <ul className=" flex flex-col gap-2 text-xs">
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Everything in Pro</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Team collaboration</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Custom integrations</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Dedicated support</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>SLA guarantee</li>
                                  <li className='text-[#627382] font-medium flex gap-2 items-center'> <FaCheck className='text-[#30B868]'/>Custom branding</li>
                              </ul>
                              <div className="">
                                  <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl btn-block text-white font-bold ">Contact Sales</button>
                              </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;