import { USERS } from '../../data/dataTemp';
/**
 * Fake Fetching of each user
 * @param {string} email 
 * @param {string} password 
 */
const LoginUser = (email, password) => {
  const user = USERS.find(user => user.email === email && user.password === password);
  return user || null;
};

export {
  LoginUser
};
