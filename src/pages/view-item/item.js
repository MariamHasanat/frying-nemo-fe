/**
 * Fake fetching of single item
 * @param {number} id
 */

const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItems || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

const getItems = () => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/")
  .then((response)=>response.json())
  .catch((error)=>{
    alert(error.toString());
  });
};

const getSingleItem = async (id) => {
  try{
    const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
     if(response.status===200){
      const item = await response.json();
      return item;
     }
     else{
      return null;
     }
  }
  catch(error){
    console.error(error);
    return undefined;
  }
//   return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
//   .then((response)=>response.json())
//   .catch((error)=>{
//     alert(error.toString());
// });
}


export {
  getItem,
  getItems,
  getSingleItem
};
