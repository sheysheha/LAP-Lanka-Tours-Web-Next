import React from 'react'
import Image from "next/image";

export default function NavBar() {
    return (

        <div className='flex justify-between items-center w-screen bg-[#2499bf] h-16'>
            {/* <img src={logo2} alt='Logo' /> */}
           <h1 className='text-white font-serif text-2xl ml-5 font-semibold'>LAP Lanka Tours</h1>


            <ul className='flex gap-8 m-2 text-white font-semibold font-sans'>
                <li>HOME</li>
                <li>PACKAGES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
            <div>

            </div>
        </div>
    )
}