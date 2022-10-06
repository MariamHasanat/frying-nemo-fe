import './multivalue-list.css'

const MultivalueList = ({data}) => {
  let items = data.map(item => <div>
    <li>
      <p className='itemName'>{item.itemName}</p>
      <button>X</button>
    </li>
  </div>)
  return <div className='multivalueList'>
    <ul>
      {items}
    </ul>
  </div>
}

export default MultivalueList;