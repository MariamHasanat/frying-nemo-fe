/**
 * Fake Fetching of single item
 * @param {string} email
 * @param {string} password
 */

const fetchUsers = async () => {
  try {
    const response = await fetch(`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users`);
    const res = await response.json();
    return res;
  } catch {
    return [];
  }
};

const authUser = async (email, password) => {
  const users = await fetchUsers();
  const user = users.find(user => user?.email === email && user?.password === password);
  return user || null;
};

export { authUser };