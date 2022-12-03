const getUsers = async () => {
  return fetch("https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users")
    .then(res => res.json())
    .catch(err => console.error(err));


};


export {
  getUsers
};
