
const fetchItems = (searchTerm, categories) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerm}&categories=${categories}`)

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
const fetchItem = async (id) => {

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
  };
};

const createItem = (item) => {

  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`,
    {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
    .then(response => {
      if (response.status === 201) {

        return true;
      } else {
        return false;
      }
    })

    .catch(error => {

      console.log(error);
      return false;
    });

};

const deleteItem = async (id) => {

  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`, { method: 'DELETE' });

    if (response)
      return true;

    else
      return null;
  }

  catch (error) {
    console.log(error);
    return undefined;
  }
};



export {
  fetchItem,
  fetchItems,
  createItem,
  deleteItem
};
