const getItems =  () => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/")
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

export {
  getItem,
  getItems
};
