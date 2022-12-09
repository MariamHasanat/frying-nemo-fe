const fetchItems =  () => {
    return fetch ('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/') 
    .then ((data) =>  data.json()) 
    .catch (error => {alert (error.toString())})
}
const fetchItem = async (id) => {
  try {
    const response = await fetch (`https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/${id}`) ;
    if (response.status === 200) {
      const singleItem = await response.json() ;
      return singleItem ;
    } else {
      return null ;
    }
  }
  catch (error) {
    console.error (error) ;
    return undefined ;
  }
}
export {fetchItems , fetchItem} ;      