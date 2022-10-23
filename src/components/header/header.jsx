import './header.css'
const Handel =(props)=>{
  return(
  <header className='handel-group'>
    <img className='img' src ='./fish.png' />
    <h1>Seafood Restaurant</h1>
    <div>
   
        <div>
          <a href="/add" >Add</a>
          </div>
        <div>< a href = "/view">View</a></div>
     
    </div>
  </header>
  );

  
};
export default Handel 