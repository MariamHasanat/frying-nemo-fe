
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItemsFromAPI = async () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then(res => (res.json()))
    .catch(error => { alert(error.toString()) });
};


const getItem = (id) => {
  const items = JSON.parse(localStorage.menuitems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

export {
  getItem,
  getItemsFromAPI
};
