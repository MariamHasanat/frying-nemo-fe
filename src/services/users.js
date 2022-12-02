/**
 * 
 * @param {String} email 
 * @param {String} password 
 */
const loginUser = async (email, password) => {

  const allUsers = await (await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users/')).json();
  const user = await allUsers.find(user => {
    return user['email'] === email && user['password'] === password;
  });
  return user;

};

export {
  loginUser
};