import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Search order #"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-28 h-11 rounded-full bg-darkbrown-2 px-4 py-2 text-sm placeholder:text-stone-900 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-darkbrown-1 focus:ring-offset-1 "
    />
    </form>
  );
}

export default SearchOrder;
