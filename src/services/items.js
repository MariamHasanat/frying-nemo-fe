const getItems = async () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error.toString()));
};


/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = async (id) => {

  // console.log('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + id);
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + id)
    .then(response => {
      return response.json();
    }).catch(e => console.log(e.toString()));
  // const items = JSON.parse(localStorage.menuItems || '[]');
  // const item = items.filter(it => it.id.toString() === id);
  // return item[0] || null;
};

export {
  getItem, getItems
};
