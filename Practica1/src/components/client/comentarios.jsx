export default function Comentarios({
  id,
  nombre,
  imagen,
  comentario,
  estrellas,
}) {
  return (
    <div
      key={id}
      className="max-w-md bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imagen}
          alt={nombre}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{nombre}</h2>
          <div className="flex text-yellow-400">
            {"★".repeat(estrellas)}
            {"☆".repeat(5 - estrellas)}
          </div>
        </div>
      </div>

      {/* Comentario */}
      <p className="text-gray-600 text-sm leading-relaxed">{comentario}</p>
    </div>
  );
}
