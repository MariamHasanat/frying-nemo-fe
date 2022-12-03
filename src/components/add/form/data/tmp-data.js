
const  USERS =  () =>{
  return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users')
  .then((res)=>{
    return res .json;
  })
  .catch((err)=>{
   console.log(err);
   return[];
  })

}
export {
  USERS
};