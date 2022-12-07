import { USERS } from '../data/temp_data';
/**
 * @param {string} email
 * @param {string} password 
 * @returns 
 */
const loginUser = (email, password) => {
    let user = USERS.find(user => user.email.trim() === email.trim() && user.password === password);
    return user || null;
};

export {
    loginUser
};