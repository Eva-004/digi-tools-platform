import React from 'react';
import logo from '../assets/logo.png';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({cartCount}) => {
 
    return (
        <div className="navbar bg-base-100 lg:w-10/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px]">
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px]">
                    <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-8 items-center">
                <div className='indicator'>
                    <FiShoppingCart className='text-xl'/>
                    <span className={`badge badge-sm indicator-item bg-red-500 text-white ${cartCount ===0 ? 'hidden' : 'flex'}`}>
                        {
                           cartCount
                        }
                        </span>
                </div>
                <button className='text-lg font-semibold'>Login</button>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-4xl text-[16px] font-semibold text-white'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;