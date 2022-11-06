
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  console.log(item)
  return item[0] || null;
};

export {
  getItem
};