// import { USERS } from '../../data/dataTemp';
/**
 * Fake Fetching of each user
 * @param {string} email 
 * @param {string} password 
 */
const LoginUser = async (email, password) => {

  const response = await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users ');
  // .then(error => console.log(error));
  const result = await response.json();
  const user = await result.find(user => {
    return user.email === email && user.password === password;

  });
  return user;

  // const user = USERS.find(user => user.email === email && user.password === password);
  // return user || null;
};

export {
  LoginUser
};
