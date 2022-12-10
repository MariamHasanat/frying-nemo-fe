import { useState } from "react";

/**
 * @param {boolean} Defultvalue
 * @return {{toggle: Function, value: Boolean}}
 */

const useToggle = (Defultvalue) => {
  const [value, setValue] = useState(() => Defultvalue);
  const toggle = () => setValue(Boolean(!value));
  return { toggle, value };
};
export default useToggle;