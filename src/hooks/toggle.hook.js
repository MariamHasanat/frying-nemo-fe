import { useState } from "react";


const useToggle = (initValue) => {
  const [isToggle, setIsToggle] = useState(initValue);

  const toggle = () => {
    setIsToggle(!isToggle);
  }

  return [isToggle, toggle];
}

export default useToggle;