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

const createItem = (item) =>{     
    return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/",
    {
      method: "POST",
      body:JSON.stringify(item),
    }).then(async response => {
      if(response.status === 201){
        return true;
      }else{
        return false;
      }
    }).catch(error => {
      console.log(error);
      return false;
    });


}
export {
  getItem,
  getItems,
  createItem
};
