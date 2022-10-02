

/**
 *  @param { React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> & {
 * lable?: string;
 * }} props
 *  
 * 
 */

const Input = props=>{
  const {lable ,...inputProps}=props;


  return(

<div>
  { lable ? <label> {lable} </label> : null}
  <input {...inputProps} />
</div>

  );
}
export default Input;