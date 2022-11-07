import { USER } from "../data/tmp_data";
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (email, password) => {
  const user = USER.filter(user => user.email === email && user.password === password);
  console.log(user)
  return user[0] || null;
};

export {
  loginUser
};
