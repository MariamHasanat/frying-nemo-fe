const getItems = async (id) =>{
  const queryString = id ? '?id=' + id : '';
   return  fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + queryString)
   .then( (response) => response.json())    
   .catch((error) =>{
    alert(error.toString());
   })
};
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem =async (id) => {
  const items = await getItems(id);
  return items[0] || null;
};

export {
  getItem,
  getItems
};
