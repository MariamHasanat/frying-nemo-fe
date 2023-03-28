// const menuURL = `${process.env.REACT_APP_SERVER_URL}`; // TODO
const menuURL = `http://localhost:3001/menu`;

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (id) => {
    console.log(id);
    return fetch(`${menuURL}/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err.toString()));
};

/**
 * Fetch all items from api 
 */
const getAllItems = (searchTerms, categories) => {
    console.log(categories);
    return fetch(`${menuURL}?searchTerms=${searchTerms}&categories=${categories}`)
        .then(res => res.json())
        .catch(err => console.log(err.toString()));
};

const createItem = (item) => {
    return fetch(menuURL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                return true;
            } else {
                alert(res.status);
                return false;
            }
        })
        .catch((err) => {
            alert(err.toString());
            return false;
        });
};

const deleteItem = (id) => {
    console.log(id);
    return fetch(`${menuURL}/${id}`, {method: 'DELETE'})
        .then(res => res.status === 200? true: false)
        .catch(err => console.error(err.toString()));
};

export { getItem, getAllItems, createItem, deleteItem };