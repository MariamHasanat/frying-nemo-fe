//from api 
const getItems = async () => {

  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/")

    .then(async (response) => response.json())

    .catch((err) => {
      alert(err.toString());
    });
};
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = async (id) => {
  //   const items = JSON.parse(localStorage.menuItems || '[]');
  //   const item = items.filter(it => it.id.toString() === id);
  //   return item[0] || null
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/?id=${id}`)
    .then(async (response) => response.json())
    .then(items => (items[0]))
    .catch((err) => {
      alert(err.toString());
    });
};

export {
  getItem,
  getItems
};
