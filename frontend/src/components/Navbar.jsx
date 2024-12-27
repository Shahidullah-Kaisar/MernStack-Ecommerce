import React, { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextProvider';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext)

    return (
        <div className='container flex items-center justify-between py-5 font-medium'>
            <img src={assets.logo} className='w-36' alt="" />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/'>
                    <p>Home</p>
                    <hr className='border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/collection'>
                    <p>Collection</p>
                    <hr className='border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/about'>
                    <p>About</p>
                    <hr className='border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/contact'>
                    <p>Contact</p>
                    <hr className='border-none h-[1.5px] bg-gray-700 hidden'/>
                </NavLink>
            </ul>

            <div className=' flex items-center gap-6'>
                <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* sidebar */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=> setVisible(false)}  className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>

                </div>

            </div>
        </div>
    );
};

export default Navbar;



{/* <header className='bg-green-950 fixed w-full top-0 left-0 z-50'>
                <nav className='container flex items-center justify-between h-16 sm:h-20'>
                    <div className='font-Arima sm:text-2xl'>eStudy</div>

                    <div className={`absolute top-0 ${menuOpen ? 'left-0' : 'left-[-100%]'} min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>
                        <ul className='flex flex-col items-center gap-8 lg:flex-row'>

                            {navLinks}
                            
                        </ul>
                        
                        <div className='absolute top-5 right-5 text-3xl cursor-pointer lg:hidden' onClick={handleMenu}>
                            <IoMdClose/>
                        </div>
                    </div>
                    <div className='text-xl sm:text-3xl cursor-pointer x-50 lg:hidden' onClick={handleMenu} >
                        <IoMdMenu />
                    </div>
                </nav>
            </header> */}