
/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItemsFromAPI = async () => {

  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then(res => (res.json()))
    .catch(error => { alert(error.toString()); });
};


const getItem = async (id) => {

  try {
    const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
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

  // const items = JSON.parse(localStorage.menuitems || '[]');
  // const item = items.filter(it => it.id.toString() === id);
  // return item[0] || null;
};

const creatItem = (item) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/', 
  {
    method: 'POST',
    body: JSON.stringify(item),

  })
  .then( respons=>{
    respons.json()
  })
  .catch(error=>{console.log(error)})

};

export {
  getItem,
  getItemsFromAPI,
  creatItem
};
