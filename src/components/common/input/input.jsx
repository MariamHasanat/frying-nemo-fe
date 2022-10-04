

/**
 *  @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> & {
 * label?: string;
 * }} props
 *  
 * b
 * 
 */

const Input = props => {
  const { label, ...inputProps } = props;


  return (

    <div>
      {
      label ?
        <label> <span> {label} </span>
          &nbsp;

          {inputProps.required && <span style={{ color: "red" }} > * </span> }

        </label> : null
        }

      <input {...inputProps} />
    </div>

  );
};
export default Input;