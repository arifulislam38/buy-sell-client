import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Assignment-12`;
    },[title])
};

export default UseTitle;