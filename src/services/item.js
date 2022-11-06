const getItem = (id) =>{
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it=>  it.id.tostring() === id);
  return item[0] ||null;
};
export{
  getItem
};