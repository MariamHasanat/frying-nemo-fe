



const getItems = () => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/")
    .then(response => {
      return response.json();
    })
    .catch((error) => {
      alert(error.toString());
    });
};

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

export {
  getItem,
  getItems
};
