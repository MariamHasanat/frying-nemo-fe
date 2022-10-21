import React from "react";


/**
 * 
 * @param {React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>; & {
 *  label?: string;
 * }} props 
 * @returns 
 */
const Image = props => {
  const { label, ...imgProps } = props;

  return (
    <div>
      {label ?
       <label>
         <span> {label}</span> 
        { imgProps.required && <span>* </span>}
   </label>
        : null
      }

      <input {...imgProps} />
    </div>
  );
};
export default Image;