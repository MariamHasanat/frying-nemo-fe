import { USERS } from '../data/users';

/**
 * check if user/password combination exists
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
const checkUser = (email, password) => {
    const user = USERS.filter(user => user.email === email && user.password === password);
    return user[0] || null;
};

export { checkUser };