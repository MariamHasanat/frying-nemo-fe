import { useState } from "react";

/**
 * 
 * @param {boolean} defaultValue 
 * @returns 
 */
const useToggle = (defaultValue) => {

  const [value, setValue] = useState(defaultValue);
  const toggleTourist = () => setValue(!value);

  return [value, toggleTourist];
};

export default useToggle;