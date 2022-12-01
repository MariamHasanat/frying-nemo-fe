const getItemsApi = async () => {

  const response = await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/');
  return response.json();

  // return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
  //   .then( (res) => {
  //     return  res.json();
  //   })
  //   .catch((err) => {
  //     alert(err.toString());
  //   });
};


const getItem = (id) => {
  const items = JSON.parse(localStorage.menuItem || '[]');
  const item = items.filter(it => it.id.toString() === id);
  return item[0] || null;
};

export {
  getItemsApi,
  getItem
};
