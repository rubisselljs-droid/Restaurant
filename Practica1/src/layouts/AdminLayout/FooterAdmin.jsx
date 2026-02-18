export default function FooterAdmin() {
    return (
       <footer className="bg-white border-t border-gray-200 py-4 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-600 text-sm mb-2 md:mb-0">
                    © {new Date().getFullYear()} AdminPanel. Todos los derechos reservados.
                </div>
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                        Términos
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                        Privacidad
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                        Soporte
                    </a>
                </div>
            </div>
        </footer>
    );
}