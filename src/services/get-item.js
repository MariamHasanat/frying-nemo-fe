const getItems =  () => {
    return fetch ('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/') 
    .then ((data) =>  data.json()) 
    .catch (error => {alert (error.toString())})
}
export default getItems ;       