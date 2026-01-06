import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
export default function FooterCliente() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-blue-950 text-white pt-10 pb-6">
            <div className="container mx-auto px-4">
                {/* Logo y Descripción */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2">
                            <span className="text-blue-300">Marea</span>
                            <span className="text-white"> y </span>
                            <span className="text-teal-300">Sal</span>
                        </h2>
                        <p className="text-gray-300 italic">Cocina del Mar | Frescura y Tradición</p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/share/1G9xixt7bT/" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/rubisselljs?igsh=MWp1MDFzdGFzdDl3dg==" className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/qr/GHC323FXABHUN1" className="bg-green-500 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                            <FaWhatsapp />
                        </a>
                        <a href="https://github.com/rubisselljs-droid" className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110">
                            <IoLogoGithub />
                        </a>

                    </div>
                </div>

                {/* Secciones del Footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contacto */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Contacto</h3>
                        <div className="space-y-3">
                            <p className="flex items-center">
                                <i className="fas fa-map-marker-alt text-blue-300 mr-3"></i>
                                <span>Av. del Mar 123, Costa Azul</span>
                            </p>
                            <p className="flex items-center">
                                <i className="fas fa-phone text-blue-300 mr-3"></i>
                                <span>+34 912 345 678</span>
                            </p>
                            <p className="flex items-center">
                                <i className="fas fa-envelope text-blue-300 mr-3"></i>
                                <span>info@mareaysal.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Horarios */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-teal-400 pb-2">Horarios</h3>
                        <div className="space-y-2">
                            <p><span className="font-semibold">Lunes - Jueves:</span> 13:00 - 23:00</p>
                            <p><span className="font-semibold">Viernes - Sábado:</span> 13:00 - 00:00</p>
                            <p><span className="font-semibold">Domingo:</span> 13:00 - 22:00</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Newsletter</h3>
                        <p className="mb-4 text-gray-300">Suscríbete para ofertas especiales</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className=" px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none bg-amber-50 border-2 border-blue-500"
                            />
                            <button className="border-2 border-blue-500 from-blue-500 hover:from-blue-600 hover:to-teal-600 px-4 py-2 rounded-r-lg font-semibold transition duration-300">
                                Suscribir
                            </button>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Copyright y Enlaces */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0 text-gray-300">
                        © 2025 <span className="text-white font-semibold">Marea y Sal Cocina del Mar</span>. Todos los derechos reservados.
                    </p>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-blue-300 transition duration-300">Política de Privacidad</a>
                        <a href="#" className="hover:text-blue-300 transition duration-300">Términos y Condiciones</a>
                        <a href="#" className="hover:text-blue-300 transition duration-300">Aviso Legal</a>
                        <a href="#" className="hover:text-blue-300 transition duration-300">Reservas</a>
                    </div>
                </div>
            </div>

            {/* Decoración marina */}
            <div className="text-center mt-6 text-blue-300">
                <i className="fas fa-fish text-lg mr-2"></i>
                <i className="fas fa-anchor text-lg mr-2"></i>
                <i className="fas fa-water text-lg"></i>
            </div>
        </footer>
    );
}