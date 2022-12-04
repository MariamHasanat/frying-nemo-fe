const getItems = async () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error.toString()));
};


/**
 * Fetching of single item
 * @param {number} id 
 */
const getItem = async (id) => {

  // console.log('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + id);
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + id)
    .then(response => {
      return response.json();
    }).catch(e => console.log(e.toString()));

};

const createItem = async (item) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu',
    {
      method: 'POST',
      body: JSON.stringify(item),
    }).then((response) => {
      return response.status === 201;
    }).catch(error => console.log(error));
};


const deleteItem = async (id) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu${id}`,
    {
      method: 'DELETE',
    }).then((response) => {
      return response.status === 201;
    }).catch(error => console.log(error));
};

export {
  getItem,
  getItems,
  createItem
};
