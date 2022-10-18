import './header.css'
const Handel =(props)=>{
  return(
  <header className='handel-group'>
    <img className='img' src ='./fish.png' />
    <h1>Seafood Restaurant</h1>
    <div>
   
        <div><button className={props.currentPage==='add'?'current':''} onClick={()=>props.onNavigate('add') } >Add</button></div>
        <div><button className={props.currentPage==='view'?'current':''}  onClick={()=>props.onNavigate('view')}>View</button></div>
     
    </div>
  </header>
  );

  
};
export default Handel 