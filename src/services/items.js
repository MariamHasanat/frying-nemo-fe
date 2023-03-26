
const getMenu = async (searchTerm , categories) => {
  return fetch(`http://127.0.0.1:3001/items?searchTerms=${searchTerm}&category=${categories}`)
    .then((res) => res.json())
    .catch((err) => {
      alert(err.toString());
    });
};


/**
 * Fake Fetching of single item
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
  } catch (err) {
    console.log(err);
    return null;
  }

};

const createdItem = async (item) => {
  return await fetch('http://127.0.0.1:3001/items', {
    method: 'POST',
    headers : {
     'Content-Type' : 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => {
      if (response.status === 201) {
        alert("Adding Successfully");
        return true;
      } else {
        return false;
      }
    }).catch((err) => {
      return false;
    });
};
export {
  fetchItem,
  getMenu,
  createdItem
};