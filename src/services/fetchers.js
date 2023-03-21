import axios from "axios";

const fetchMenuItems = async (search, categories) => {
  console.log(`cats`, categories)
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/item?searchTerm=${search ? search : ``}&category=${categories ? categories : ``}`);
  return response?.data;
};

export { fetchMenuItems };