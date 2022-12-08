import { useState } from "react";
/**
 * 
 * @param {boolean} defaultValue 
 * @returns {[value: boolean, toggle:()=> void]}
 */
const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
};

export default useToggle;