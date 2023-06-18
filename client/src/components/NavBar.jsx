import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

    const isAuth = false;
    const activeStyles = {
        color: '#991b1b',
    };

    return (
        <div className='flex py-4 justify-between items-center'>
            <span className='flex justify-center items-center w-6 h-6 bg-grey-600 text-xs text-white rounded-sm'>
                LOGO
                {/* <img src='https://postimg.cc/HcR2zyfg' alt='logo' /> */}
            </span>
            {isAuth && (
                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to={`/`}
                            href='/'
                            className='text-xs text-gray-700 hover:text-blue-900'
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >Shops</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/order`}
                            href='/'
                            className='text-xs text-gray-700 hover:text-blue-900'
                            style={({ isActive }) => isActive ? activeStyles : undefined}
                        >Shopping Cart</NavLink>
                    </li>
                </ul>
            )}
            <div className='flex justify-center items-center bg-red-800 text-xs text-white rounded-sm px-4'>
                {isAuth ? <button className='px-4 py-2'>Logout</button> : <Link to={'/login'} className='px-4 py-2'>Sign In</Link>}
            </div>
        </div>
    )
}


