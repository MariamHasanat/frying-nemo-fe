
/**
 * Fake Fetching of single item
 * @param {number} id 
 */

const getItems = async () => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/").
    then(Response => Response.json())
    .catch(err => alert(err.toString()));

};



const getSingleItem = (id) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
  .then(response => {
      if (response.status===200) {
       return response.json()
        
      }
    else{ return null}
    })
    .catch(err =>{
      alert(err)
    return undefined
})
};


export {
  getSingleItem,
  getItems
};