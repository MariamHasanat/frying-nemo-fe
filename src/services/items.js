const getItems = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`)
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
 * @param {number} id
 */
const getItem = async (id) => {
  try {
    const item = await fetch(
      "https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/" + id
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
  fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/", {
    method: "POST",
    body: JSON.stringify(item),
  })
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
export { getItem, getItems, createItem };
