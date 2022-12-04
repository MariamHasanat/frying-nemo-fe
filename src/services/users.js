
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (email, password) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users').then(async response =>{
    const users = await response.json();
    const user = users.find(user => user.email === email && user.password === password);
    return user || null;
  }).catch(error =>  {
    console.log(error);
    return null;});
  // const user = USERS.find(user => user.email === email && user.password === password);
  // return user;
};

export {
  loginUser
};
