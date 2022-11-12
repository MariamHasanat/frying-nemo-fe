const CheckBox = props => {
  const { label, ...inputProps } = props;

  return (
    <div>            
      <input {...inputProps} type="checkbox" id={`chk-lbl-${label}`} />
      {
        label ? (
          <label htmlFor={`chk-lbl-${label}`} className={props.checked ? 'checked' : ''}>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
    </div>
  );
};

export default CheckBox;