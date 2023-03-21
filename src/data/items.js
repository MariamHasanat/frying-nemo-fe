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
const getItem = (id) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/?id=${id}`)
  .then((response) => {
    const jsonRes = response.json();
    return jsonRes;
  }).then((items)=>{
    return items[0];
  })
  .catch((error) => {
    alert(error.toString());
  });
};
 const createItem=(item)=>{
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/',{
    method:'POST',
    body: JSON.stringify()
  }).then((response)=>{
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
