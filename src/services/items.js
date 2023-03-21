import axios from "axios";

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
  return axios.post(`http://localhost:3001/item`, item);
};

export { getItem, createItem };