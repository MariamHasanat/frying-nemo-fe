import { useState } from "react";

const useToggle = (def_val) => {
    const [isChecked, setIsChecked] = useState(def_val || false);
    const toggle = () => {
        setIsChecked(!isChecked);
    };
    return [isChecked, toggle];
};
export default useToggle;