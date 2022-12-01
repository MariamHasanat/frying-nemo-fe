const fetchItemsApi = async () => {

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

const getItem =  async (id) => {
  return  fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
    .then((res) => {
      if(res.status === 200){
      return res.json();
      }
      else{
        return null;
      }
      
    })
    .catch((err) => {
      console.log(err)
      return null
    });
};
export {
  fetchItemsApi,
  getItem
};
