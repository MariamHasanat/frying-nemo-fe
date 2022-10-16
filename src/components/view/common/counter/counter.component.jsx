import './counter.css'

const Counter = ({counter, incCounter, decCounter}) => {
  return (
    <div className="counter-wrapper">
    <button onClick={decCounter} className='block'>-</button>
    <div className='block value'>{counter}</div>
    <button onClick={incCounter} className='block'>+</button>
    </div>
  )
}

export default Counter