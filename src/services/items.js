
const getItems = () =>{
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/').then(async (response) =>{
    const items = await response.json();
    return items;
  }).catch((error) => {
    alert(error.toString);
  });
};
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
 const getItem = async (id) => {
  try {
    const item= await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/' + id);
    if(item.status === 200){
      const itemRes = await item.json();  
      return itemRes;
    }else{
      return null;
    }
  } catch (error) {
    
   return undefined; 
  }
};

export {
  getItem,
  getItems
};