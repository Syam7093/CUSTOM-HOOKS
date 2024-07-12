import React from 'react'
import useCustomHook from './Utilss'
import ProductList from './ProductList'


const Profile = ({name}) => {
    let maindata=useCustomHook("https://fakestoreapi.com/products")
    console.log(maindata,"maindata")
  return (
    <div>
        <h1>this is profile page</h1>
        <ProductList name={name}></ProductList>
        {
          maindata.map((e)=>{
            return (
                <div>
                    <h2>{e.price}</h2>
                </div>
            )
          })  
        }
    </div>
  )
}

export default Profile