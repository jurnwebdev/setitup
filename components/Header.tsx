import React from 'react'
import logo from '../public/setituplogo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../public/navBar.svg'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-3 md:px-10 py-4 bg-white'>
            <Image src={logo} width={200} height={50} alt="Set it Up logo" className='w-32'></Image>
            <Image src={NavBar} width={40} height={40} alt='Navbar Icon' className='flex md:hidden'></Image>
            <nav className='hidden md:flex'>
                <ul className='flex gap-6 items-center title-color'>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Discover.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Mac Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Windows Os.</Link></li>
                    <li className='hover:text-[#7096ff] hover:translate-y-2 duration-300 ease-in'><Link href='#'>Contact.</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header