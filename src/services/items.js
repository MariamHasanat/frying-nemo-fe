
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

export {
  getItem,
  getItems
};