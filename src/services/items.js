
const getItems = () =>{
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/').then(async (response) =>{
    const items = await response.json();
    return items;
  }).catch((error) => {
    alert(error.toString);
  });
};
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = (id) => {
  const items = localStorage.getItem("menuItems").length ? [...JSON.parse(localStorage.getItem("menuItems"))]: [];
  const item = items.find(it => it.id.toString() === id);
  return item;
};

export {
  getItem,
  getItems
};