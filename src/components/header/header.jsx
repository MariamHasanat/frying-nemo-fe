import './header.css'
const Handel =(props)=>{
  return(
  <div className='handel-group'>
    <img className='img' src ='./fish.png' />
    <h1>Seafood Restaurant</h1>
    <div>
   
        <div><butoon className={props.curentpage===('add')?'curent':''} onClick={()=>props.onnavegate('add') } >Add</butoon></div>
        <div><butoon className={props.curentpage===('view')?'curent':''}  onClick={()=>props.onnavegate('view')}>View</butoon></div>
   
    </div>
  </div>
  );
  
};
export default Handel 