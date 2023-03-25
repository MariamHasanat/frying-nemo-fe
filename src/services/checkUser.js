import { USERS } from '../data/users';

/**
 * check if user/password combination exists
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
const checkUser = async (email, password) => {
    const users = await USERS();
    // console.log('users', users);
    const user = users.find(user => user.email === email && user.password === password);
    return user || null;
};

export { checkUser };