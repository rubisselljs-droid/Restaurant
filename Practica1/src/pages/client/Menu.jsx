import CartAtent from "../../components/Admin/cartAtent";
import { useContext } from "react";
import { ProductoContext } from "../../context/ProductoProvi";

export default function Menu() {
    const {producto} = useContext(ProductoContext);
    return (
        <div className="p-10 flex justify-center">
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
    );
}