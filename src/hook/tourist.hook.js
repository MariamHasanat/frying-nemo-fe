import { useState } from "react";

/**
 * @param {boolean} Defultvalue
 * @return {[value:boolean,toggle:()=>void]}
 */

const useToggle=(Defultvalue)=>{
const [value , setValue]=useState(Defultvalue);
const toggle= ()=> setValue(!value);
return {toggle,value};
};
export default useToggle;