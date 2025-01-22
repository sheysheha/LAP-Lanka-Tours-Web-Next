// import React from 'react'
// import Image from "next/image";

// export default function NavBar() {
//     return (
//         <div className='sticky top-0 z-10'>
//         <div className='flex justify-between items-center w-screen bg-[#2499bf] h-16'>
//             {/* <img src={logo2} alt='Logo' /> */}
//            <h1 className='text-white font-serif text-2xl ml-5 font-xl'>LAP Lanka Tours</h1>


//             <ul className='flex gap-8 m-2 text-white font-semibold font-sans'>
//                 <li>HOME</li>
//                 <li>PACKAGES</li>
//                 <li>ABOUT</li>
//                 <li>CONTACT US</li>
//             </ul>
//             <div>

//             </div>
//         </div>
//         </div>
//     )
// }
'use client';
import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Change the navbar color when scrolling down
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the listener on unmount
    };
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 left-0 w-full h-16 flex justify-between items-center transition-all duration-300
         ${isScrolled ? 'bg-[#2499bf]' : 'bg-[#4b4d4e2d]'}`}
    >
      <h1 className="text-white font-serif text-2xl ml-5 font-xl">LAP Lanka Tours</h1>
      <ul className="flex gap-8 m-2 text-white font-semibold font-sans mr-5">
        <li>HOME</li>
        <li>PACKAGES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  );
}
