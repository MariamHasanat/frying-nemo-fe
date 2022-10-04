import './textarea.css'

const Textarea = props => {
  const {label, required, ...inputProps} = props;

  return (
    <div className="textarea-group">
      {label &&
      (<label>
        <span>{label}</span>
        &nbsp;
        {required && (<span className='required'>*</span>)}
        </label>)}
      <textarea {...{required: required, ...inputProps}} />
    </div>
  )
}

export default Textarea