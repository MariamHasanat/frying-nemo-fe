const fetchItems = async (searchTerms , categories) => {
    return fetch (`http://localhost:3001/items/?searchTerms=${searchTerms}&categories=${categories}`) 
    .then ((data) =>  data.json()) 
    .catch (error => {alert (error.toString())})
}

const fetchItem = async (id) => {
  try {
    const response = await fetch (`http://localhost:3001/items/${id}`) ;
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

const createItem = (item) => {
  return fetch ('http://localhost:3001/items/' , 
  {
    headers : {
      'Content-Type' : 'application/json'
    },
    method: "POST" , 
    body: JSON.stringify(item)
  })
  .then ( response => {
    if (response.status === 201)
      return true ;
    else 
      return false ;
  })
  .catch (error => {
    console.log(error);
    return false ;
  })
}

const deleteItem = async (id) => {
  try {
    const response =  await fetch (`http://localhost:3001/items/${id}` , {method: 'DELETE'}) ;
    if (response)
      return true ;
    else 
      return null ;
  }
  catch (error) {
    console.log(error);
    return undefined ;
  }
}

const updateItem = async (item , id) => {
  try {
    const response =  await fetch (`http://localhost:3001/items/${id}` ,
    { 
      headers : {
        'Content-Type' : 'application/json'
      },
      method: 'PUT' ,
      body: JSON.stringify(item)
    }) ;
    if (response)
      return true ;
    else 
      return false ;
  }
  catch (error) {
    console.log(error);
    return false ;
  }
}

export {fetchItems , fetchItem , createItem , deleteItem , updateItem} ;      