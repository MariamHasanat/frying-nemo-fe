import { json } from "react-router-dom";

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
      if (response.status === 200) {
        response.json();
      }
      else {
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

const createItem = (item) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/', {
    method: 'POST',
    body: JSON.stringify(item)
  }).then(response => {
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log(error);
    return false;
  });
};
const deleteItem = (id) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (response.status === 204) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log(error);
    return undefined;
  });
};

const updateItem = (item) => {
  return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${item.id}`, {
    method: 'PUT',
  }).then(response => {
    if (response) {
      return true;
    } else {
      return false;
    }
  }).catch(error => {
    console.log(error);
    return undefined;
  });
};

export {
  fetchItem,
  fetchItems,
  createItem,
  deleteItem,
  updateItem
};
