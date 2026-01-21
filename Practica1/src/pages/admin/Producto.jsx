import { useState } from "react";
import { useContext } from "react";
import { ProductoContext } from "../../context/ProductoProvi";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartAtent from "../../components/Admin/cartAtent";
import Input from "../../components/Admin/Input";
export default function Producto() {

     const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const {producto, setProducto} = useContext(ProductoContext);

  //mis datos de editar
  const [editar, setEditar] = useState(null);
  const [error, setError] = useState("");
  const [validar, setValidar] = useState("");

  const dato = (setState) => (e) => {
    setState(e.target.value);
  };

  const enviar = (e) => {
    e.preventDefault();

    if (!name || !image || !price || !description) {
      setError("LLENE TODOS LOS CAMPOS PORFAVOR");
      return;
    } else {
      if (editar !== null) {
        setProducto(
          producto.map((item) =>
            item.id === editar
              ? {
                  ...item,
                  name,
                  image: image ? URL.createObjectURL(image) : null,
                  price,
                  description,
                }
              : item,
          ),
        );

        setEditar(null);
        setValidar("PRODUCTO EDITADO");
      } else {
        setProducto([
          ...producto,
          {
            id: Date.now(),
            name,
            image: image ? URL.createObjectURL(image) : null,
            price,
            description,
          },
        ]);

        setValidar("PRODUCTO AGREGADO");
      }
    }
    setName("");
    setImage(null);
    setPrice("");
    setDescription("");
  };
    return (
       <div>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={dato(setName)}
        placeholder="Nombre"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <Input
        type="number"
        name="price"
        value={price}
        onChange={dato(setPrice)}
        placeholder="Precio"
      />
      <Input
        type="text"
        name="description"
        value={description}
        onChange={dato(setDescription)}
        placeholder="Descripcion"
      />
      <button onClick={enviar}>{editar !== null ? "Editar" : "Agregar"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {validar && <p style={{ color: "green" }}>{validar}</p>}

      <div>
        {producto.map((item) => {
          return (
            <CartAtent
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
    );
}