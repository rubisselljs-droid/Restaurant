// Admin.jsx - Componente principal actualizado
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";

export default function Admin() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* HeaderAdmin ahora incluye la barra lateral */}
      <HeaderAdmin />
      
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col lg:ml-20 transition-all duration-300">
        {/* Contenido del Outlet */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        
        {/* Footer */}
        <FooterAdmin />
      </div>
    </div>
  );
}