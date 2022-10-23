import './header.css';
const Head =(props)=>{


return(

<header>
<div className="head-container">
  <h1>
<img src="./mylogo.svg" alt="HACONA MATATA" />
HAKONA MATATA
</h1>
</div>
<div className="right">
        <nav style={{  margin: "1rem" }}>
          {/* <button className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
          <button className={props.currentPage === 'view' ? 'current' : ''} onClick={() => props.onNavigate('view')}>View</button> */}
          <a style={{padding:"1rem"}} href="./add">ADD</a>
          <a href="./view">VIEW</a>
        </nav>
      </div>

</header>

);

}
export default Head;