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
  esCliente,
}) {
  return (
    <div className="group relative flex flex-col h-full bg-slate-900 
rounded-2xl sm:rounded-3xl 
shadow-xl hover:shadow-blue-900/20 
transition-all duration-500 hover:-translate-y-2 
overflow-hidden border border-slate-800">

  {/* Imagen */}
  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
    <img
      src={imagen}
      alt={nombre}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>

    {/* Precio */}
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 
    bg-white/10 backdrop-blur-md border border-white/20 
    text-white font-bold 
    py-1.5 px-3 sm:py-2 sm:px-4 
    text-sm sm:text-base 
    rounded-full shadow-lg 
    flex items-center gap-1 
    group-hover:bg-blue-600/80 group-hover:border-blue-500 
    transition-colors duration-300">

      <span className="text-cyan-300">$</span>
      {precio.toLocaleString("es-ES")}
    </div>
  </div>

  {/* Contenido */}
  <div className="p-4 sm:p-6 flex flex-col grow relative z-10 -mt-6 sm:-mt-8">

    <div className="absolute inset-0 bg-slate-900 rounded-t-2xl sm:rounded-t-3xl border-t border-slate-800"></div>

    <div className="relative z-10 flex flex-col grow">

      {/* Título */}
      <div className="mb-3 sm:mb-4">
        <h2
          className="text-lg sm:text-xl md:text-2xl font-bold 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-300 to-teal-300 
          mb-2 truncate"
          title={nombre}
        >
          {nombre}
        </h2>

        <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-blue-500 to-teal-500 
        rounded-full group-hover:w-20 sm:group-hover:w-24 
        transition-all duration-500"></div>
      </div>

      {/* Descripción */}
      <p className="text-slate-300 leading-relaxed 
      line-clamp-3 
      mb-4 sm:mb-6 
      grow 
      text-xs sm:text-sm">
        {descripcion}
      </p>

      {/* BOTONES ADMIN */}
      {esAdmin && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-800">
          
          <button
            onClick={() => eliminar(id)}
            className="flex items-center justify-center gap-2 
            py-2.5 sm:py-3 px-4 
            text-sm sm:text-base
            rounded-xl bg-slate-800 text-red-400 
            hover:bg-red-500/10 hover:text-red-300 
            transition-colors duration-300"
          >
            Eliminar
          </button>

          <button
            onClick={() => editar(id)}
            className="flex items-center justify-center gap-2 
            py-2.5 sm:py-3 px-4 
            text-sm sm:text-base
            rounded-xl 
            bg-gradient-to-r from-blue-600 to-teal-600 
            text-white font-semibold 
            hover:from-blue-500 hover:to-teal-500 
            shadow-lg hover:shadow-blue-500/30 
            transition-all duration-300 transform hover:scale-105"
          >
            Editar
          </button>
        </div>
      )}

      {/* BOTÓN CLIENTE */}
      {esCliente && (
        <div className="mt-auto pt-4 border-t border-slate-800">
          <button
            disabled={stock <= 0}
            className={`w-full py-2.5 sm:py-3 
            text-sm sm:text-base
            rounded-xl font-semibold transition-all duration-300 
            ${
              stock > 0
                ? "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white shadow-lg hover:shadow-blue-500/30 transform hover:scale-[1.02]"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
          >
            {stock > 0 ? "Comprar ahora" : "Producto agotado"}
          </button>
        </div>
      )}

    </div>
  </div>
</div>

  );
}
