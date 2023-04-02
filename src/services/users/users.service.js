const loginUser = (email, password) => {
  return fetch('http://localhost:3001/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(async res => {
      if (res) { return res; }
      else { return null; }
    })
    .catch(error => {
      console.error(error);
      return null;
    });
};
export { loginUser };