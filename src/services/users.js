import { USERS } from '../data/temp_data';
/**
 * @param {string} email
 * @param {string} password 
 * @returns 
 */
const loginUser = (email, password) => {
    let user = USERS.filter(user => user.email === email && user.password === password);
    return user[0] || null;
};

export {
    loginUser
};