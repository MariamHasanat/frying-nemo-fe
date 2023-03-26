
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

    const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id} `);
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

const createItem = async (item) => {



  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu `,
    {

      method: 'POST',
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


export {
  fetchItem,
  fetchItems,
  createItem
};
