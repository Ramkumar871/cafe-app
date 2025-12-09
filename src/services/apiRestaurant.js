const API_URL = 'https://crownglory-bakes-and-cafe-api.vercel.app';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  // console.log(res)
  return res;
}

export async function getCategory(categoryName) {
  const res = await fetch(`${API_URL}/menu/${categoryName}`);
  if (!res.ok) throw Error('Failed getting category');
  return res;
}

export async function getItem(categoryName, itemId) {
  const res = await fetch(`${API_URL}/menu/${categoryName}/${itemId}`);
  if (!res.ok) throw Error('Failed getting item');
  return res;
}

export async function getOrder(orderId) {
  const res = await fetch(`${API_URL}/order/${orderId}`);
  if (!res.ok) throw Error(`Couldn't find order #${orderId}`);
  return res;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order/new`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
    
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch {
    throw Error('Failed updating your order');
  }
}
