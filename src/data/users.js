const USERS = () => {
    return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users')
        .then(res => {
            return res.json();
        })
        .catch(err => {
            alert(err.toString());
            return [];
        });
};

export { USERS };

