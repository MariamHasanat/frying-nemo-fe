/**
 * 
 * @param {number} id 
 * @returns 
 */
const getItem = (id) => {
    const items = JSON.parse(localStorage.categoriesArray)  || [];
    let item = items.filter(it => it.id === id.toString());
    return item[0] || null;
};

export {
    getItem
};