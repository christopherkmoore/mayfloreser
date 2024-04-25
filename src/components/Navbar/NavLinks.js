import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-mayra-green" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-mayra-green" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-mayra-green" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-mayra-green" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-mayra-green hover:bg-offgreen inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink>
        </>
    )
}

export default NavLinks;
