
/**
 * Fake Fetching of single item
 * @param {number} id 
 */


const getItems = async (searchTerm,categories) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerm}&category=${categories}`);
  const item = await res.json();
 
  
  return item;

};

const getItem = async (id) => {
  const res = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
  const item = await res.json();
  return item;
};

const createItem = (item) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/`,
    {
      method: 'POST',
      headers :{
       'Content-Type' : "application/json"
      },
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