import { getCategory } from "../../../services/apiRestaurant";

export async function categoryLoader({ params }) {
  const {categoryName} = params;
  const category = await getCategory(categoryName);
  return category;
}
