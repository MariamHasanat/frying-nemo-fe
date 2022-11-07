/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (myId) => {
    const items = JSON.parse(localStorage.getItem('menu'));
    return items.filter(item => item.id.toString() === myId)[0] || null;
};

export { getItem };