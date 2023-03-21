const API = 'http://localhost:3006';
const getItems = async (category, searchTerm) => {
  console.log({ category });
  return fetch(`${API}/items?category=${category}&searchTerms=${searchTerm}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
  return fetch(`${API}/items` + id)
    .then(response => {
      return response.json();
    }).catch(e => console.log(e.toString()));

};

const createItem = async (item) => {
  return fetch(`${API}/items`,
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
