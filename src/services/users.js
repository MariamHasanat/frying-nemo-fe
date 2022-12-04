import { getUsers } from '../data/tmp_data';
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
// const loginUser = (email, password) => {
//   const user = USERS.find(user => user.email === email && user.password === password);
//   return user || null;
// };

// export {
//   loginUser
// };

const loginUser = async (email, password) => {
  const USER = await getUsers();
  const user = USER.filter(user => user.email === email && user.password === password);
  return user[0] || null;
};

export {
  loginUser
};
