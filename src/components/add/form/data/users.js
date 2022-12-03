import { USERS } from"./tmp-data";

/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser =async (email, password) => {
  const user =  await USERS.filter(user => user.email === email && user.password === password);
  return user[0] || null;
};

export {
  loginUser
};
