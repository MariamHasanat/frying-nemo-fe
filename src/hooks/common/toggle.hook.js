import { useState } from "react";

/**
 * return bool state and a simple toggle fn
 * @param {boolean} defaultValue Default state value
 * @returns {[boolean , () => void]}
 */
const useToggle = (defaultValue) => {

  const [value, setValue] = useState(defaultValue);
  const toggle = () => setValue(!value);
  return [value, toggle];

};

export default useToggle;