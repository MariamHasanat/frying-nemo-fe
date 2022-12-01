
const fetchItems = () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};

/**
 * Real Fetching of single item
 * @param {number} id 
 */
const fetchItem = async (id) => {
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
};

export {
  fetchItem,
  fetchItems
};