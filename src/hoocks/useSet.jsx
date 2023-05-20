import { useEffect } from "react"

const useSet = set =>{
    useEffect(()=>{
        document.set = set;

    },[set])
};
export default useSet;