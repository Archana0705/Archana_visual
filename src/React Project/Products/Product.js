import React, { useState } from "react";
import "./Product.css"
import data from "../productData"
const ProductsCom=({cartItems}) =>{
   /*  const {productItems} = data;
    const [detail,setDetail]= useState([]);
    function Viewdetail(){
      setDetail(productItems.filter((item)=> item.id!== product.id));
    } */
    const {productItems} = data;
       
    return (
      <div>
           {/*  <img className="cart-items-image"src={item.image} alt={item.productName}/>
                         <div>
                             <p className="cart-items-name">{item.productName}</p>
                             </div> */}
      </div>
    );
}

export default ProductsCom