import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
export default function Admin() {
  // mis datos de productos

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />
      <main className="grow w-full">
        <Outlet />
      </main>
      <FooterAdmin />
    </div>
  );
}
