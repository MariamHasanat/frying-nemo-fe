import './counter.css'

const Counter = () => {
  return (
    <div className="counter-wrapper">
    <button className='block add'>-</button>
    <div className='block value'>0</div>
    <button className='block remove'>+</button>
    </div>
  )
}

export default Counter