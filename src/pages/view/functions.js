const getMenuItems = (setLoading, setMeuItems) => {
    setLoading(true);
    setTimeout(() => {
        const items = JSON.parse(localStorage.menuItems || '[]');
        setMeuItems(items);
        setLoading(false);
    }, 100);
};

export {
    getMenuItems,
};