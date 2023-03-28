import axios from "axios";

const authUser = async (email, password) => {
  try {
    const user = (await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/auth`, { email, password })).data;
    return user;
  } catch {
    return null;
  }
};

const addNewUser = async (email, password, fullName, imageURL) => {
  const user = (await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`, { email, password, role: `None`, fullName, imageURL })).data;
  console.log(`userr: `, user)
  return user;
};

export { addNewUser, authUser };