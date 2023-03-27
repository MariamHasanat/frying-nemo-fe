
const fetchItems = (categoriesFromURL, searchTerms) => {
    return fetch(`http://127.0.0.1:3001/items?searchTerms=${searchTerms}&categories=${JSON.stringify(categoriesFromURL)}`)
        .then((response) => response.json())
        .catch((error) => {
            alert(error);
        });
};

const fetchItem = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:3001/items/${id.id}`);
        if (response.status === 200) {
            const item = await response.json();
            return item.value;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};

const createItem = async (item) => {
    return fetch(`http://127.0.0.1:3001/items`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(item)
        })
        .then(async (response) => {
            return (response.status === 201);
        })
        .catch((error) => {
            console.log(error.toString());
            return false;
        });
};

const deleteItem = async (id) => {
    return fetch(`http://127.0.0.1:3001/items/${id}`,
        { method: 'DELETE' })
        .then((response) => {
            if (response)
                return true;
            else
                return false;
        })
        .catch((error) => {
            console.log(error.toString());
            return undefined;
        });
};

const updateItem = async (item) => {
    return fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${item.id}`,
        {
            method: 'PUT',
            body: JSON.stringify(item)
        })
        .then((response) => { return (response ? true : false); })
        .catch((error) => { return false; });
};

export {
    fetchItems,
    fetchItem,
    deleteItem,
    updateItem,
    createItem,
};