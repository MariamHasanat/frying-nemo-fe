const fetchMenuItems = async (id) => {
  const response = await fetch(`https://6388704fd94a7e50409b8353.mockapi.io/v1/menuItems${id? `/${id}` : ``}`);
  return await response.json();
};

const fetchMenuItems2 = async (id) => {
  const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id? `/${id}` : ``}`);
  return await response.json();
};

fetchMenuItems2().then(
  (res) => {
    console.debug(res)
  }
)

export { fetchMenuItems, fetchMenuItems2 };