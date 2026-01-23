export default function CartAtent({
  id,
  nombre,
  imagen,
  precio,
  descripcion,
  stock,
  eliminar,
  editar,
  esAdmin,
}) {
  return (
    <div className="group relative flex flex-col h-full bg-slate-900 rounded-3xl shadow-xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-800">
      
      {/* Contenedor de imagen */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={imagen} 
          alt={nombre} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradiente sobre la imagen para mejorar legibilidad si hubiera texto, o estilo */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
        
        {/* Precio Flotante */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-1 group-hover:bg-blue-600/80 group-hover:border-blue-500 transition-colors duration-300">
          <span className="text-cyan-300">$</span>
          {precio.toLocaleString('es-ES')}
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6 flex flex-col grow relative z-10 -mt-8">
        {/* Fondo del contenido con gradiente suave */}
        <div className="absolute inset-0 bg-slate-900 rounded-t-3xl border-t border-slate-800"></div>
        
        <div className="relative z-10 flex flex-col grow">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300 mb-2 truncate" title={nombre}>
              {nombre}
            </h2>
            <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-teal-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
          </div>
          
          <p className="text-slate-300 leading-relaxed line-clamp-3 mb-6 grow text-sm">
            {descripcion}
          </p>
          
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium uppercase tracking-wider mb-6">
            <span>Ref: {id}</span>
            <span className={stock > 0 ? "text-teal-400" : "text-red-400"}>
              {stock > 0 ? "En Stock" : "Agotado"}
            </span>
          </div>

          {/* Botones de administrador */}
          {esAdmin && (
            <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-800">
              <button 
                onClick={() => eliminar(id)} 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors duration-300 group/btn"
              >
                <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                <span>Eliminar</span>
              </button>
              
              <button 
                onClick={() => editar(id)} 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-linear-to-r from-blue-600 to-teal-600 text-white font-semibold hover:from-blue-500 hover:to-teal-500 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                <span>Editar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
