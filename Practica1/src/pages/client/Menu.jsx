import { useEffect, useState } from "react";
import { supabase } from "../../client";
import CartAtent from "../../components/Admin/cartAtent";

export default function Menu() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  
    const traerProductos = async () => {
      const { data } = await supabase.from("productos").select("*");
      setProductos(data);
      setLoading(false);
    };
  
    useEffect(() => {
      traerProductos();
    }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 mb-10 text-center">
          Nuestro Menú
        </h1>
        
        {productos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No hay productos disponibles por el momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productos.map((item) => (
              <CartAtent
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                precio={item.precio}
                descripcion={item.descripcion}
                stock={item.stock}
                esAdmin={false}
                esCliente={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
