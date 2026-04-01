import React from 'react';
import footerLogo from '../assets/footer.png'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
       <div className='bg-[#101727] pt-30 pb-10'>
         <div className='w-10/12 mx-auto'>
            <div className='flex flex-col justify-center md:flex-row gap-10 md:gap-20 md:justify-evenly text-white'>
                <div>
                    <img src={footerLogo} alt="footer logo" />
                    <p className='text-white mt-4'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='space-y-2'>
                    <p>Product</p>
                    <ul className='space-y-2'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <p>Company</p>
                    <ul className='space-y-2'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                    <p>ContactResources</p>
                    <ul className='space-y-2'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div className='space-y-2'>
                    <p>Social Links</p>
                    <ul className='text-[#101727] flex gap-2'>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><a href=""><AiFillInstagram className='w-5 h-5'/></a></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><a href=""><FaFacebookSquare/></a></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><a href=""><FaXTwitter /></a></li>
                    </ul>
                </div>
            </div>
            <div className='text-white mt-20'>
                <hr />
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-7.5'>
                <div className='text-white '>
                    © 2026 Digitools. All rights reserved.
                </div>
                <div className='text-white flex justify-between gap-1 md:gap-4'>
                    <p>Privacy Policy </p> 
                    <p>Terms of Service</p>           
                    <p>Cookies</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;