// import { USERS } from '../data/tmp-data';

/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
// const loginUser = (email, password) => {
//   const user = USERS.find(user => user.email === email && user.password === password);
//   return user || null;
// };

const loginUser = (email, password) => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/users/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(async response => {
      return await response.json();
    })
    .catch(error => {
      console.error(error);
      return null;
    });
};

export {
  loginUser
};
