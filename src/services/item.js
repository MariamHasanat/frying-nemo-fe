const getItems = () => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then((response) => response.json())
    .catch((error) => {
      alert(error.toString());
    });
};


// const getItem = (id) =>{
//   return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
//   .then((response)=>
//   response.json())
//   .catch((error) =>{
//     alert(error.toString())
//   })
// };

const fetchItem = async (id) => {
  try {
    const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`);
    if (response.status == 200) {
      const item = await response.json();
      return item;
    } else {
      return null;
    }

  }
  catch (error) {
    console.error(error);
    return undefined;
  }
};


export {

  getItems,
  fetchItem
};