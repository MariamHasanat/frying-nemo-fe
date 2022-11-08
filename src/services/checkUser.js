import { USERS } from '../data/users';

/**
 * check if user/password combination exists
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
const checkUser = (email, password) => {
    const user = USERS.find(user => user.email === email && user.password === password);
    return user || null;
};

export { checkUser };