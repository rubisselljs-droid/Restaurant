import { useState, useEffect } from "react";
import CartAtent from "../../components/Admin/cartAtent";
import { supabase } from "../../client";
import imageCompression from "browser-image-compression";

export default function Producto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [productos, setProductos] = useState([]);

  const traerProductos = async () => {
    const { data } = await supabase.from("productos").select("*");
    setProductos(data);
  };

  const agregarproducto = async () => {
    const options = {
      maxSizeMB: 1, // Tamaño máximo en MB (puedes bajarlo a 0.5 si quieres más compresión)
      maxWidthOrHeight: 1920, // Redimensionar si es muy grande
      useWebWorker: true, // Usa un hilo separado para no congelar la app
    };

    if (editingId) {
      // Lógica para ACTUALIZAR
      let imagenUrl = null;

      if (file) {
        try {
          const compressedFile = await imageCompression(file, options);
          const nombreArchivo = `${Date.now()}-${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from("imagen")
            .upload(nombreArchivo, compressedFile);

          if (uploadError) {
            console.log("Error al subir la imagen:", uploadError);
            return;
          }
          const { data: publicUrlData } = supabase.storage
            .from("imagen")
            .getPublicUrl(nombreArchivo);
          imagenUrl = publicUrlData.publicUrl;
        } catch (error) {
          console.log("Error al comprimir imagen:", error);
          return;
        }
      }

      const datosActualizar = { nombre, precio, descripcion, stock };
      if (imagenUrl) datosActualizar.imagen = imagenUrl;

      const { error } = await supabase
        .from("productos")
        .update(datosActualizar)
        .eq("id", editingId);

      if (error) console.log("Error al actualizar:", error);
      else {
        setEditingId(null);
        setNombre("");
        setPrecio("");
        setDescripcion("");
        setStock("");
        setFile(null);
        traerProductos();
      }
      return;
    }

    // 1. Validar que se haya seleccionado un archivo
    if (!file) return;

    try {
      const compressedFile = await imageCompression(file, options);
      // 2. Generar un nombre único para el archivo (usando la fecha actual)
      const nombreArchivo = `${Date.now()}-${file.name}`;

      // 3. Subir la imagen al bucket "imagen" en Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("imagen") // nombre del bucket
        .upload(nombreArchivo, compressedFile);

      if (uploadError) {
        console.log("Error al subir la imagen:", uploadError);
        // NOTA: Si ves el error "new row violates row-level security policy",
        // debes ir a Supabase > Storage > Policies y crear una política para permitir INSERT/UPLOAD.
        alert("Error de permisos (RLS) al subir imagen. Revisa la consola.");
        return;
      }

      // 4. Obtener la URL pública de la imagen recién subida
      const { data: publicUrlData } = supabase.storage
        .from("imagen")
        .getPublicUrl(nombreArchivo);
      const imagenUrl = publicUrlData.publicUrl;

      // 5. Insertar el producto en la base de datos con la URL de la imagen
      const { error: insertError } = await supabase.from("productos").insert([
        {
          nombre: nombre,
          precio: precio,
          descripcion: descripcion,
          imagen: imagenUrl,
          stock: stock,
        },
      ]);

      if (insertError) {
        console.log("Error al guardar producto:", insertError);
        return;
      }

      console.log("Producto agregado correctamente");

      // 6. Limpiar el formulario y recargar la lista
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setStock("");
      setFile(null);
      traerProductos();
    } catch (error) {
      console.log("Error en el proceso de imagen:", error);
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const Eliminar = async (id) => {
    const { error } = await supabase.from("productos").delete().eq("id", id);
    if (error) {
      console.log("Error al eliminar producto:", error);
      return;
    } else {
      console.log("Producto eliminado correctamente");
      traerProductos();
    }
  };

  const Editar = (id) => {
    const producto = productos.find((p) => p.id === id);
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
      setDescripcion(producto.descripcion);
      setStock(producto.stock);
      setEditingId(id);
    }
  };

  return (
 <div className="min-h-screen bg-gray-50">

  {/* HEADER */}
  <div className="bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Gestión de Productos
      </h1>
      <p className="text-gray-500 mt-1">
        Administra tu catálogo de tienda
      </p>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* FORMULARIO */}
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-12">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {editingId ? "Editar producto" : "Agregar nuevo producto"}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="input"
        />

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input"
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="md:col-span-2 input h-24 resize-none"
        />
      </div>

      <button
        onClick={agregarproducto}
        className="mt-8 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all"
      >
        {editingId ? "Actualizar Producto" : "Agregar Producto"}
      </button>
    </div>

    {/* GRID PRODUCTOS */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Lista de Productos
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productos.map((emp) => (
          <div
            key={emp.id}
            className="transition-transform duration-300 hover:scale-105"
          >
            <CartAtent
              id={emp.id}
              nombre={emp.nombre}
              imagen={emp.imagen}
              precio={emp.precio}
              descripcion={emp.descripcion}
              stock={emp.stock}
              esAdmin={true}
              esCliente={false}
              eliminar={() => Eliminar(emp.id)}
              editar={() => Editar(emp.id)}
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
}
