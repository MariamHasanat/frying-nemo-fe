import './select.css'

const Select = ({items}) => {
  let listItems = items.map(item => <option key={item} value={item.toLowerCase()}>{item}</option>)
  return (
    <div className="select">
      <select name="" id="">
        <option value="none" selected disabled>Select a value</option>
        {listItems}
      </select>
    </div>
  )
}

export default Select;