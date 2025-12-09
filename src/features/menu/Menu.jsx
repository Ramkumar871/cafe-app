import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../ui/Navbar";

function Menu() {
  const categories = useLoaderData();

  return (
    <div className="menu">
      <Navbar categories={categories}  />

      <Outlet />
    </div>
    
  );
}

export default Menu;
