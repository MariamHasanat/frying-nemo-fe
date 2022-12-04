/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

const createItem = (item) => {
  return fetch(`https://6388704fd94a7e50409b8353.mockapi.io/v1/menuItems`, {
    method: `POST`,
    body: JSON.stringify(item),
  }).then((res) => res.json());
};

export { getItem, createItem };