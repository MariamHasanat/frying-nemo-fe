/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
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
    .then(async (response) => {
      return await response.json();
    })
    .catch((error) => {
      alert(error.toString());
    });
};
export {
  loginUser
};

