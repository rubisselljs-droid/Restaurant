import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Logo from '../../assets/image/image.png'

export default function HeaderCliente() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center'>
                    <img className='w-32 md:w-40' src={Logo} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <nav className='hidden md:flex space-x-8 items-center'>
                    <Link to='/home' className='text-lg font-bold text-gray-700 hover:text-blue-500 transition'>Home</Link>
                    <Link to='/menu' className='text-lg font-bold text-gray-700 hover:text-blue-500 transition'>Menu</Link>
                    <a href='#' className='text-lg font-bold text-gray-700 hover:text-blue-500 transition'>Reservas</a>
                    <a href='#' className='text-lg font-bold text-gray-700 hover:text-blue-500 transition'>Contacto</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden text-3xl text-gray-700 focus:outline-none'
                    onClick={toggleMenu}
                >
                    <HiMenu />
                </button>
            </div>

            {/* Mobile Menu Backdrop & Sidebar */}
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            />

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col h-full'>
                    {/* Drawer Header */}
                    <div className='flex justify-between items-center p-4 border-b border-gray-100'>
                        <span className='text-lg font-bold text-gray-800'>Menú</span>
                        <button onClick={toggleMenu} className='text-gray-500 hover:text-red-500 transition'>
                            <HiX className='text-2xl' />
                        </button>
                    </div>

                    {/* Links */}

                </div>
            </div>
        </header>
    );
}