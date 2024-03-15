import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon
}from'@heroicons/react/24/outline';

function Header() {
  return (
   
    <header>
        {/* top nav  */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={40}
            objectFit="contain"
            className="cursor-pointer mx-5"
          />
            </div>
            {/* search bar */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
              <input className="p-2 h-full w-6 flex flex-grow flex-shrink rounded-l-md focus:outline-none " type="text" />
              <MagnifyingGlassIcon className="h-12 p-4"/>
            </div>
            {/* right nav  */}
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
              <div className=" link" >
                  <p>Hello abhi</p>
                  <p className="font-bold md:text-sm">Account & Lists</p>
              </div>
              <div className=" link" >
                  <p>Returns</p>
                  <p className="font-bold md:text-sm">& Orders</p>
              </div>
              <div className=" relative link flex items-center" >
                  <span className="absolute top-0 right-0 md:right-8 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">0</span>  
                  <ShoppingCartIcon className="h-10"/>
                  <p className="hidden md:inline font-bold md:text-sm">Basket</p>
              </div>
            </div>
            
        </div>
        {/* bottom nav  */}
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="link flex items-center">
            <Bars3Icon className="h-6 mr-1" />
              All
            </p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food & Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <p className="link hidden lg:inline-flex">Buy Again</p>
            <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
        </div>
    </header>
      
   
  );
}

export default Header;
