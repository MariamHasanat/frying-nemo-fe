import { USERS } from '../data/tmp_data.js';
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const LoginUser = (email, password) => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users")
    .then(async (response) => {
      const users = await response.json();
      console.log(users);
      const res = await users.filter(user => user.email === email && user.password === password);
      return res;
      console.log(res);
    }).then((user) => { return user[0]; }
    )
    .catch((err) => {
      alert(err.toString());
    });
};

export {
  LoginUser
};
