import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-darkbrown-1 px-8 py-4 uppercase text-base">
      <Link to="/" className="w-23 md:w-27.5">
        <h1>Haroxx Cafe&Bakes</h1>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
