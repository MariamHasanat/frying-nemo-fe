import './multivalue-list.css'
import Button from '../../button/button.component'

const MultivalueList = ({data, removeIngredient}) => {
  let items = data.map(itemName => 
    <li>
      <p className='itemName'>{itemName}</p>
      <button onClick={() => {removeIngredient(itemName)}} type='button'>❌</button>
    </li>)
  return <div className='multivalueList'>
    <ul>
      {items}
    </ul>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '-10px'}}>
      <Button type='button' name='Clear' style={{display: 'flex', backgroundColor: '#e63946', width: '70px', fontSize: '13px', height: '20px'}} width='2000px' onClick={() => {
        removeIngredient('')
      }}></Button>
    </div>
  </div>
}

export default MultivalueList;