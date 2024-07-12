import { useEffect, useState } from "react"
import axios from "axios"

const useCustomHook=(url)=>{
    let [data,setdata]=useState([])
    useEffect(()=>{
        getalldata()
    },[])

    const getalldata=async()=>{

        let apidata=await axios.get(url)
        setdata(apidata.data)
    }
    
    return data

}

export default useCustomHook