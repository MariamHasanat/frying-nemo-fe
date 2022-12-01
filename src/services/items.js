/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const fetchItem = async (id) => {
  // const items = JSON.parse(localStorage.menuItems || '[]');
  // const item = items.filter(it => it.id.toString() === id);
  // return item[0] || null;

  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
  .then((response => {
    if(response.status===200)
    {
      response.json()
    }
    else{
      return null;
    }
  }))
  .catch((error) => {
    alert(error.toString());
  });
  // try {
  //   const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
  //   if (response.status === 200) {
  //     const item = await response.json();
  //     return item;
  //   } else {
  //     return null;
  //   }
  // } catch (error) {
  //   return null;
  // }

};

const fetchItems = () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((response => response.json()))
    .catch((error) => {
      alert(error.toString());
    });
};

export {
  fetchItem,
  fetchItems
};
