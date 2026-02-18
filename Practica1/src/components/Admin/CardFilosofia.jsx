export default function CardFilosofia({ nombre, descripcion, imagen }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* IMAGEN */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

      
      </div>

      {/* CONTENIDO */}
      <div className="p-5 text-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {nombre}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">{descripcion}</p>
      </div>
    </div>
  );
}
