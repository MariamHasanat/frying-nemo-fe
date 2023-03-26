const getItems = (searchTerm,categories) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerm}&categories=${categories}`)
    .then(async (response) => {
      const items = await response.json();
      return items;
    })
    .catch((error) => {
      console.log(error);
    });
};
/**
 * Fake Fetching of single item
 * @param {string} id
 */
const getItem = async (id) => {
  try {
    const item = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/items/${id}`
    );
    if (item.status === 200) {
      const itemRes = await item.json();
      return itemRes;
    } else {
      return null;
    }
  } catch (error) {
    return undefined;
  }
};
const createItem = (item) => {
  fetch(`${process.env.REACT_APP_SERVER_URL}/items`, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
export { getItem, getItems, createItem };
