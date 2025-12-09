import { getItem } from "../../../services/apiRestaurant";

export async function itemLoader({params}) {
const {categoryName, itemId} = params;
  const item = await getItem(categoryName, itemId)
  return item
}