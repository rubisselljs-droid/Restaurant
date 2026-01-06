import HeaderCliente from "./headerCliente";
import FooterCliente from "./footerCleiente";
import { Outlet } from "react-router-dom";
export default function ClienteLayout() {
    return (
        <>
            <HeaderCliente />
            <main className="w-100">
                <Outlet />
            </main>
            <FooterCliente />
        </>
    );
}
