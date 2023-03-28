

const fetchItemsApi = async (searchTerm, categories) => {

  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/items?searchTerm=${searchTerm}&categories=${categories}`);
  return response.json();

};

const getItem = async (id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`)
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
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

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
const deleteItem = async (id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(item),
    }
  )
    .then(async res => {
      if (res.status === 200)
        return true;
      else
        return false;
    })
    .catch(err => {
      return false;
    });
};

const updateItem = async (id) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/items/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(item),
    }
  )
    .then(async res => {
      if (res.status === 200)
        return true;
      else
        return false;
    })
    .catch(err => {
      return false;
    });


};
export {
  fetchItemsApi,
  getItem,
  deleteItem,
  updateItem,
  creatItem
};
