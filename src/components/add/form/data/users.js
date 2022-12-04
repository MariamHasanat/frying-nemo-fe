
/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
const loginUser =  (email, password) => {
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users')
    .then(async res => {
      const user = await res.json();
      return user.find(user => user.email === email && user.password === password)||null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

};

export {
  loginUser
};
