/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser = (email, password) => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users")
    .then(async (response) => {
      const users = await response.json();
      console.log(users);
      const result = await users.filter(user =>
        user['email'] === email && user['password'] === password); console.log(users['email']);
      return result;

    }).then((user) => {
      return user[0];
    })
    .catch((error) => {
      alert(error.toString());
    });
};
export {
  loginUser
};

