import { USERS } from '../data/tmp-data';

const loginUser = (email, password) => {
  const user = USERS.filter(user => 
    user.email === email && 
    user.password === password);
  return user[0] || null;
};

export {
  loginUser
};

