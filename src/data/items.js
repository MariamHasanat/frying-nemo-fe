const getItems =  (searchTerm,categories) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerm}&categories=${categories}`)
    .then((response) => {
      const jsonRes = response.json();
      return jsonRes;
    })
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

 const createItem=(item)=>{
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`,
  {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)

  })
  .then((response)=>{
const result = response.json();
console.log(result);
  }).catch((error) => {
    alert(error.toString());
  });
 }
export {
  getItem,
  getItems,
  createItem
};
