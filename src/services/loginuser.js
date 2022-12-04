import { getUsers } from "../data/tmp_data";
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser =  async (email, password) => {
  const USER=await getUsers()
  console.log(USER)
  const user = USER.filter(user => user.email === email && user.password === password);
  localStorage.setItem('user', JSON.stringify(user));
  console.log(user[0])
  return user[0] || null;
};

export {
  loginUser
};
