/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.find(item => item.id == id);
  return item;
};

export {
  getItem
};
