import { useState, useEffect } from "react";
import CartAtent from "../../components/Admin/cartAtent";
import { supabase } from "../../client";
export default function Producto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");

  const [productos, setProductos] = useState([]);

  const traerProductos = async () => {
    const { data } = await supabase.from("productos").select("*");
    setProductos(data);
  };

  const agregarproducto = async () => {
    // 1. Validar que se haya seleccionado un archivo
    if (!file) return;

    // 2. Generar un nombre único para el archivo (usando la fecha actual)
    const nombreArchivo = `${Date.now()}-${file.name}`;

    // 3. Subir la imagen al bucket "imagen" en Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("imagen") // nombre del bucket
      .upload(nombreArchivo, file);

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
    traerProductos();
  };

  useEffect(() => {
    traerProductos();
  }, []);

  return (
    <div>
      <h1>HOLA MUNDO</h1>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={agregarproducto}>agregar</button>




      <div>
        {productos.map((emp)=>{
          return(
            <CartAtent 
            key={emp.id} 
            id={emp.id} 
            nombre={emp.nombre} 
            imagen={emp.imagen} 
            precio={emp.precio} 
            descripcion={emp.descripcion} 
            stock={emp.stock} 
            esAdmin={true}
            esCliente={false}
             ></CartAtent>
          )
        })}
      </div>
    </div>
  );
}
