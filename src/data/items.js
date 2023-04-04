const getItems = (searchTerm, categories) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerm}&categories=${categories}`)
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`);
    if (response.status === 200) {
      const item = await response.json();
      return item;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
/**
* Fake Fetching of single item
* @param {number} id 
*/
const deleteItem = async (id) => {
  await fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`, { method: 'DELETE' })
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        console.debug('Successfully updated item');
        return true;
      } else {
        console.debug('Failed', res.status);
      }
    });
};

const updateItem = (item) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${item._id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        console.debug('Successfully updated item');
        return true;
      } else {
        console.debug('Failed', res.status);
        throw new Error();
      }
    });
};

const createItem = (item) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)

    })
    .then((response) => {
      const result = response.json();
      console.log(result);
    }).catch((error) => {
      alert(error.toString());
    });
};
export {
  getItem,
  getItems,
  createItem,
  deleteItem,
  updateItem
};
