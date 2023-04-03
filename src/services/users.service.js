/**
 * @param {string} email
 * @param {string} password 
 * @returns 
 */
const loginUser = (email, password) => {
    return fetch('http://127.0.0.1:3001/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async (response) => {
            const users = await response.json();
            return users.status === 200 ? users : null;
        })
        .catch((error) => {
            console.log(error.toString());
            return null;
        });
};

export {
    loginUser
};