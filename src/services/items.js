// const menuURL = `${process.env.REACT_APP_SERVER_URL}/`;
const menuURL = `http://172.0.0.1:3001/menu`;

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (myId) => {
    const url = menuURL + myId;
    return fetch(url)
        .then(res => { res.json(); console.log(res.josn()); })
        .catch(err => console.log(err.toString()));
};

/**
 * Fetch all items from api 
 */
const getAllItems = () => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/menu`)
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