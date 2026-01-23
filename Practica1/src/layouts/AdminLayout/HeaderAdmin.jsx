import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HeaderAdmin() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-linear-to-r from-gray-900 to-blue-950 text-white shadow-lg sticky top-0 z-50 border-b border-blue-900/50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link to="/admin" className="text-2xl font-bold flex items-center gap-2 group">
                            <span className="text-blue-300 group-hover:text-blue-200 transition-colors">Admin</span>
                            <span className="text-teal-300 group-hover:text-teal-200 transition-colors">Panel</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/admin/producto" 
                            className="text-gray-300 hover:text-white font-medium transition-colors relative group py-2"
                        >
                            Productos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div 
                    className={`md:hidden transition-all duration-300 ease-in-out border-t border-gray-700 overflow-hidden ${
                        isOpen ? "max-h-48 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                    }`}
                >
                    <nav className="flex flex-col space-y-2">
                        <Link 
                            to="/admin/producto" 
                            className="block py-2 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Productos
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}