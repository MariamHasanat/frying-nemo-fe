
/**
 * Fake Fetching of single item
 * @param {number} id 
 */


const getItems = async () => {
  const res = await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/');
  const item = await res.json();
  return item;

};

const getItem = async (id) => {
  const res = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
  const item = await res.json();
  return item;
};

const createItem = (item) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/',
    {
      method: 'POST',
      body: JSON.stringify(item)
    })
    .then(async response => {
      // console.log(await response.json());
      if(response.status === 201)
      return true;
      else{
        return false
      }
    })
    .catch(error => {
      console.log(error);
      return false
    });
};


export {
  getItem,
  getItems,
  createItem
};