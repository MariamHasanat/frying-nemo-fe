const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

export {
  getItem
};
