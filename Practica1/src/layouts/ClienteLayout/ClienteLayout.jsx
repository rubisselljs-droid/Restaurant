import HeaderCliente from "./headerCliente";
import FooterCliente from "./footerCleiente";
import { Outlet } from "react-router-dom";
export default function ClienteLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderCliente />
            <main className="grow w-full">
                <Outlet />
            </main>
            <FooterCliente />
        </div>
    );
}
