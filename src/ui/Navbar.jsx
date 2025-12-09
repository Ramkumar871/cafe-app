import { NavLink } from "react-router-dom";

function Navbar({ categories }) {
  return (
    <nav>
      <ul className="flex gap-4 justify-start flex-wrap px-8 py-3 border-b border-gray-300">
        {categories.map((category) => (
          <li key={category._id}>
            <NavLink to={`/menu/${category.name}`} >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;


