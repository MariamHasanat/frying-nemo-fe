const menuURL = 'https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/';

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (myId) => {
    // const items = JSON.parse(localStorage.getItem('menu'));
    // return items.filter(item => item.id.toString() === myId)[0] || null;
    const url = menuURL + myId;
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err.toString()))
};

/**
 * Fetch all items from api 
 */
const getAllItems = () => {
    return fetch(menuURL)
        .then(res => res.json())
        .catch(err => console.log(err.toString()));
};

export { getItem, getAllItems };