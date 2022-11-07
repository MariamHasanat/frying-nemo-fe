import { USERS } from '../../data/dataTemp';
/**
 * Fake Fetching of each user
 * @param {string} email 
 * @param {string} password 
 */
const LoginUser = (email, password) => {
  const user = USERS.filter(user => user.email === email && user.password === password);
  return USERS[0] || null;
};

export {
  LoginUser
};
