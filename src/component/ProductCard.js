import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <img src={item?.img} alt=""/>
        <div>conscious choice</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true? "New Arrival" : ""}</div>
    </div>
  )
}

export default ProductCard