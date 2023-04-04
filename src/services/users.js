/**
 * check if user/password combination exists
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
const login = async (email, password) => {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(async response => {
            return await response.json();
        })
        .catch(error => {
            console.error(error);
            return null;
        });
};

export { login };