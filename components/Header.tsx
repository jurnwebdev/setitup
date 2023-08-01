'use client'
import { useState } from 'react'
import React from 'react'
import logo from '../public/setituplogo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../public/navBar.svg'
import closeNav from '../public/close.svg'

const Header = () => {
    const [open, close] = useState(false)

    const handleClick = () => {
        close(!open)
        console.log(close)
    }

    return (
        <header className='flex justify-between items-center px-6 relative md:px-10 py-4 bg-white'>
            <Image src={logo} width={200} height={50} alt="Set it Up logo" className='w-32'></Image>
            <button onClick={handleClick}><Image src={open ? closeNav : NavBar} width={40} height={40} alt='Navbar Icon' className='flex md:hidden'></Image></button>
            <div className={`mobile-menu-container absolute bg-white p-10 w-full duration-300 ${open ? 'flex top-[75px]' : 'hidden top-[-200px]'}`}>
                <ul className='flex flex-col gap-6 items-start title-color text-[1.3em]'>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Discover.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Mac Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Windows Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Contact.</Link></li>
                </ul>
            </div>
            <nav className='hidden md:flex'>
                <ul className='flex gap-6 items-center title-color'>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Discover.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Mac Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Windows Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Contact.</Link></li>
                </ul>

            </nav>
        </header >
    )
}

export default Header