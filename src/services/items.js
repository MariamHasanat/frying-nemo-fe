// const menuURL = `${process.env.REACT_APP_SERVER_URL}`; // TODO
const menuURL = `http://localhost:3001/menu`;

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (myId) => { // TODO: 
    const url = menuURL + "/" + myId;
    return fetch(url)
        .then(res => { res.json(); console.log(res.josn()); })
        .catch(err => console.log(err.toString()));
};

/**
 * Fetch all items from api 
 */
const getAllItems = (searchTerms) => {
    return fetch(`${menuURL}?searchTerms=${searchTerms}`)
        .then(res => res.json())
        .catch(err => console.log(err.toString()));
};

const createItem = (item) => {
    return fetch(menuURL, {
        method: 'POST',
        body: JSON.stringify(item)
    })
        .then(res => {
            if (res.status === 201) {
                alert('success');
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

export { getItem, getAllItems, createItem };