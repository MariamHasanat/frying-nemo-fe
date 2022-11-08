import { USERS } from "./tmp-data";
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (email, password) => {
  const user = USERS.find(user => user.email === email && user.password === password);
  return user || null;
};

export {
  loginUser
};
