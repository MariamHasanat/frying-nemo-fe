
const getMenu = async () => {
 return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((res) => res.json())
    .catch((err) => {
      alert(err.toString());
    });
  
    // const items = JSON.parse(localStorage.getItem('menuItems') || '[]');
    // setMenuItems(items);
    // setLoading(false);
};


/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const fetchItem = async (id) => {
  try {
  const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
  if(response.status === 200) {
    const item = await response.json();
    return item;
  } else {
    return null;
  }
} catch (err){
  console.log(err);
  return null;
}
 
};

export {
  fetchItem,
  getMenu
};