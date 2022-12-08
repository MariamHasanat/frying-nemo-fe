import { useState } from "react";

const useToggle = (defaultValue) => {
   const [isTourist , setIsTourist] = useState(defaultValue);
   const touristChangeTourist = () => setIsTourist(!isTourist);

   return [isTourist , touristChangeTourist]
}

export default useToggle;