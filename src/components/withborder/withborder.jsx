
import './withborder.css'

const Withborder=(props)=>{
  return(
   <div className="withborder">
       {props.children}
   </div>
  );
}
export default Withborder;