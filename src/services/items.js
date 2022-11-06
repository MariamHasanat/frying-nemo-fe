
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = (id) => {
  const items = localStorage.getItem("menuItems").length ? [...JSON.parse(localStorage.getItem("menuItems"))]: [];
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

export {
  getItem
};