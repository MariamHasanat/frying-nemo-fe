/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(item => item.id.toString() == id);
  return item[0] || null;
};

export {
  getItem
};
