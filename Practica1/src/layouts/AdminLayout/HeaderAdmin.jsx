// HeaderAdmin.jsx - Componente ajustado
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/image/image.png';

export default function HeaderAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    const location = useLocation();

    const menuItems = [
        { path: '/admin', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { path: '/admin/producto', label: 'Productos', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
        { path: '/admin/homeamd', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { path: '/admin/principal', label: 'Principal', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
        { path: '/admin/usuarios', label: 'Usuarios', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a4 4 0 110 5.292' },
        { path: '/admin/ordenes', label: 'Órdenes', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
        { path: '/admin/config', label: 'Configuración', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Barra lateral para escritorio */}
            <aside 
                className={`hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white shadow-2xl z-50 border-r border-blue-900/50 overflow-hidden ${
                    isSidebarHovered ? 'w-64' : 'w-20'
                } transition-all duration-300`}
                onMouseEnter={() => setIsSidebarHovered(true)}
                onMouseLeave={() => setIsSidebarHovered(false)}
            >
                {/* Logo y título */}
                <div className="flex items-center justify-center p-6 border-b border-blue-800/30 h-20">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center shadow-md">
                            {Logo ? (
                                <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
                            ) : (
                                <span className="text-white font-bold text-lg">A</span>
                            )}
                        </div>
                        
                        {/* Nombre del panel que aparece al pasar el cursor */}
                        <div className={`transition-all duration-300 overflow-hidden ${
                            isSidebarHovered ? 'opacity-100 w-40' : 'opacity-0 w-0'
                        }`}>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent whitespace-nowrap">AdminPanel</h1>
                            <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">Administración</p>
                        </div>
                    </div>
                </div>

                {/* Menú de navegación */}
                <nav className="flex-1 py-6 px-3">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                                        isActive(item.path) 
                                        ? 'bg-gradient-to-r from-blue-600/30 to-teal-600/30 text-white' 
                                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {/* Indicador de página activa */}
                                    {isActive(item.path) && (
                                        <div className="absolute -left-1 w-1 h-8 bg-gradient-to-b from-blue-400 to-teal-400 rounded-r-full"></div>
                                    )}
                                    
                                    {/* Icono siempre visible */}
                                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${
                                        isActive(item.path) 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md' 
                                        : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-blue-300'
                                    }`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    
                                    {/* Nombre que aparece al pasar el cursor */}
                                    <span className={`font-medium transition-all duration-300 whitespace-nowrap ${
                                        isSidebarHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`}>
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Separador que aparece al pasar el cursor */}
                    <div className={`my-8 transition-all duration-300 ${isSidebarHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
                    </div>
                    
                    {/* Usuario - Aparece al pasar el cursor */}
                    <div className={`transition-all duration-300 overflow-hidden ${isSidebarHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center shadow-md">
                                    <span className="font-bold text-white">AD</span>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-semibold text-white whitespace-nowrap">Administrador</h3>
                                    <p className="text-xs text-gray-400 whitespace-nowrap">admin@ejemplo.com</p>
                                </div>
                            </div>
                            <button className="w-full py-2 text-sm bg-gradient-to-r from-blue-600/50 to-teal-600/50 hover:from-blue-600/70 hover:to-teal-600/70 rounded-lg transition-all duration-200">
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Pie de la barra lateral */}
                <div className={`p-4 border-t border-blue-800/30 transition-all duration-300 ${isSidebarHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center text-xs text-gray-500">
                        <p>AdminPanel v2.1</p>
                        <p className="mt-1">© {new Date().getFullYear()}</p>
                    </div>
                </div>
            </aside>

            {/* Header móvil (se mantiene igual) */}
            <header className="lg:hidden bg-gradient-to-r from-gray-900 to-blue-950 text-white shadow-lg sticky top-0 z-50 border-b border-blue-900/50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <Link to="/admin" className="text-xl font-bold flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center shadow-md">
                                    {Logo ? (
                                        <img src={Logo} alt="Logo" className="w-6 h-6 object-contain" />
                                    ) : (
                                        <span className="text-white font-bold">A</span>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors text-sm">Admin</span>
                                    <span className="text-teal-300 group-hover:text-teal-200 transition-colors text-xs">Panel</span>
                                </div>
                            </Link>
                        </div>

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
                            isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                        }`}
                    >
                        <nav className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.path}
                                    to={item.path} 
                                    className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            
                            {/* Separador */}
                            <div className="my-2 px-4">
                                <div className="h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
                            </div>
                            
                            {/* Enlace de cierre de sesión en móvil */}
                            <button className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 mt-2" onClick={() => setIsOpen(false)}>
                                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <span>Cerrar Sesión</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}