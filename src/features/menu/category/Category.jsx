import { Link, useLoaderData } from "react-router-dom";

function Category() {
  const category = useLoaderData();
  return (
    <div className="flex max-w-xs mx-auto justify-center md:justify-start gap-4 md:max-w-9/10 flex-wrap mt-4">
      {category.items.map((item) => (
        <Link
          to={`/menu/${category.name}/${item._id}`}
          key={item._id}
          className="flex w-35 flex-col gap-2 md:w-50"
        >
          <img src={item.image} alt={item.name} className="rounded-xl" />
          <p className="">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Category;
