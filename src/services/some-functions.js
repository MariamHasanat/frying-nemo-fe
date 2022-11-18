/**
 * 
 * @param {number} id 
 * @returns 
 */
const getItem = (id) => {
    const items = JSON.parse(localStorage.menuItems)  || [];
    let item = items.find(it => it.id === id.toString());
    return item || null;
};

export {
    getItem
};