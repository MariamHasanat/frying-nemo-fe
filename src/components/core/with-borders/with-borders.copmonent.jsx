import './with-borders.css'

const WithBorders = ({children}) => {
  return <div className='with-borders'>
    {children}
  </div>
}

export default WithBorders;