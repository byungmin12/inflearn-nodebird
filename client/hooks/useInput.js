import React,{useState, useCallback} from 'react'


function useInput (initialvalue = null) {

    const [value, setValue] = useState(initialvalue)
    const handler = useCallback((e)=>{
        setValue(e.target.value)
    },[])
    return [value, handler]
}

export default useInput