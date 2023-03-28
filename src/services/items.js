
const getItems = async (searchTerms,categories) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerms=${searchTerms}&category=${categories}`)
    .then(Response => Response.json())
    .catch(err => alert(err.toString()));

};

const getSingleItem = (id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();

      }
      else { return null; }
    })
    .catch(err => {
      alert(err);
      return undefined;
    });
};

const createItem = (menu) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`,
    { 
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
     body: JSON.stringify(menu)
     }
     )
    .then( async (res) => {
      if (res.status === 201) {
        return true;
      } else {
        return false;
      }
    }).catch(err=>console.error(err))


};
const UpdateItem = (menu,id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`,
    { 
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
     body: JSON.stringify(menu)
     }
     )
    .then( async (res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    }).catch(err=>console.error(err))


};

const deleteItem = (_id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${_id}`,
  {
   method: 'DELETE'
  })
    .then( async (res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    }).catch(err=>console.error(err))


};


export {
  getSingleItem,
  getItems,
  createItem,
  UpdateItem,
  deleteItem
};