import React from 'react';
import BookmarkIcon from "../public/logo-bookmark.svg";
import MenuIcon from "../public/preview.gif"
import Image from "next/image"
const NavBar = () => {
    return (
        <header>
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1"><Image src={BookmarkIcon} alt="logo" />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-sm">
                    <li className="cursor-pointer">features</li>
                    <li className="cursor-pointer">pricing</li>
                    <li className="cursor-pointer">contact</li>
                    <button type="button" className="bg-bookmark-red text-white rounded-md px-7 py-3">Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end" >
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;