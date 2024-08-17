import { useEffect, useState } from "react"
import axios from "axios"
// here fakedata is custom hook... we can use this custom hoook like react hooks.
export const Fakedata=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
            some()
    },[])
    const some=async()=>{
      const data=await axios.get("https://fakestoreapi.com/products")
      console.log(data,"data") 
      setdata(data.data) 
    }
    return data
}



export const SyamustomHookssyam=()=>{
     let [number,setnumber]=useState(0)
     
     const inc=()=>{
      setnumber(number+1)
     }
     const dec=()=>{
      setnumber(number-1)
     }

     return{
      number,inc,dec
    }

}