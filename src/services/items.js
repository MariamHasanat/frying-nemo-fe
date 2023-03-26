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
  console.log({ id });
  return fetch(`${API}/items/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    }).catch(e => console.log(e.toString()));

};

const createItem = async (item) => {
  return fetch(`${API}/items`,
    {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.status);
      return response.status === 201;
    }).catch(error => console.log(error));
};

const deleteItem = async (id) => {
  return fetch(`${API}/items/${id}`,
    {
      method: 'DELETE',
    }).then(async (response) => {
      return response.status === 200;
    }).catch(error => console.log(error));
};

export {
  getItem,
  getItems,
  createItem,
  deleteItem
};
