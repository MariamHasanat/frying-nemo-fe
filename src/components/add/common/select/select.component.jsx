import './select.css'

const Select = ({items, ...options}) => {
  let listItems = items.map(item => <option key={item} value={item.toLowerCase()}>{item}</option>)
  return (
    <div className="select">
      <select {...options} name="category">
        <option value="none" disabled>Select a category</option>
        {listItems}
      </select>
    </div>
  )
}

export default Select;