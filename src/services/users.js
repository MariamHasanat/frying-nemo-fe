//import USERS from "../data/tmp_data";

/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */
/*const loginUser = (email, password) => {
  const user = USERS.find(user => user.email === email && user.password === password);
  return user || null;
};*/
/*const loginUser= () => {
  return  fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users')
  .then((response) =>{response.json()})
  .catch((error) => {
    alert(error.toString());
  });
}*/
const loginUser = async (email, password) => {

  const response = await fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users/')
  const user = response.json();

  return user;

};

export default loginUser

