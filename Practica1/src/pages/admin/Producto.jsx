import { useState } from "react";
import CartAtent from "../../components/Admin/cartAtent";
import { supabase } from "../../supabase";

export default function Producto() {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState(null);
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [eliminar, setEliminar] = useState("");
  const [editar, setEditar] = useState(null);

  async function Enviar() {

    if(!nombre|| !imagen ||!precio ||!descripcion){
       console.log('LLENE TODOS LOS CAMPOS');
       return;
       
    }

    const {data, error}= await supabase.from('productos').insert({
      nombre,
      precio,
      descripcion,
      imagen : imagen ? URL.createObjectURL(imagen) : null,
      stock
    })

    if(error){
      console.log(error)
    }


    console.log('producto agregado');
    
    setNombre('');
    setImagen(null);
    setPrecio('');
    setDescripcion('');
    setStock('');
  }


  const Eliminar = async () => {
    const {data, error}= await supabase.from('productos').delete().eq('id', eliminar)
    if(error){
      console.log(error)
    }
    console.log('producto eliminado');
    
  }

  const Editar = async (producto) => {
    const {data, error}= await supabase.from('productos').update({
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      imagen : producto.imagen ? URL.createObjectURL(producto.imagen) : null,
      stock: producto.stock
    }).eq('id', producto.id)
    if(error){
      console.log(error)
    }
    console.log('producto editado');
    
  }

  return (
    <div>

      <div>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        <input type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <input type="text" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
        <button onClick={Enviar}>Enviar</button>
      </div>


      <div>
        {}
      </div>
    </div>
  );
}
