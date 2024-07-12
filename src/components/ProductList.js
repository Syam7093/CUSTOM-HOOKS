import React from 'react'
import Product from './Product'

const ProductList = ({name}) => {
  return (
    <div>
        <h1>this is productlist</h1>
        <Product name={name}></Product>
    </div>
  )
}

export default ProductList