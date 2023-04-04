
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

const createItem = async (item, user) => {
    return fetch(`http://127.0.0.1:3001/items`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ ...item, addedBy: user })
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
    console.log(item);
    return fetch(`http://127.0.0.1:3001/items/${item._id}`,
        {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async (response) => {
            console.log(await response.json());
            return (response ? true : false);
        })
        .catch((error) => { return false; });
};

export {
    fetchItems,
    fetchItem,
    deleteItem,
    updateItem,
    createItem,
};