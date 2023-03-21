

const fetchItemsApi = async ( searchTerm,categories) => {

  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerm=${searchTerm}&categories=${categories}`);
  return response.json();

};

const getItem = async (id) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      else {
        return null;
      }

    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
const creatItem = (item) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/',
    {
      method: 'POST',
      body: JSON.stringify(item),

    })
    .then(async res => {
      if (res.status === 201)
        return true;
      else
        return false;
    })
    .catch(err => {
      return false;
    });
};
// const deleteItem = async (id) => {
//   return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`,{methode : 'DELETE'})
//     .then(res)
    
//       }
//       else {
//         return null;
//       }

//     })
//     .catch((err) => {
//       console.log(err);
//       return null;
//     });
// };
export {
  fetchItemsApi,
  getItem,
  creatItem
};
