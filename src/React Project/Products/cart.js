import React from "react"
import Header from "./header";
import "../Products/cart.css"

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) =>{
    const totalPrice = cartItems.reduce((price,item)=> price + item.quantity * item.price,0 );
    return(
     <div className="cart-items">
         <div className="cart-items-header">
             Cart Items
         </div> 
          { cartItems.length ===0 &&
         <div className="cart-empty">
             No items are add
             </div>}
             <div>
                 {cartItems.map((item)=>(
                     <div key={item.id} className="cart-items-list">
                         <img className="cart-items-image"src={item.image} alt={item.productName}/>
                         <div>
                             <p className="cart-items-name">{item.productName}</p>
                             </div>
                             <div>
                             <p>₹{item.price}</p>
                             </div>
                             <div className="cart-item-function">
                                 <button className="items-add" onClick={()=> handleAddProduct(item)}> +</button>
                                 <button className="items-remove"  onClick={()=> handleRemoveProduct(item)}> -</button>
                             </div>
                             <div className="items-price">
                                    {item.quantity} * {item.price}
                             </div>
                         </div>              
                 ))}
             </div>
                     <div className="total-price">
                     TotalPrice - ₹ {totalPrice}
                     </div>
     </div>
     
    )
}
export default Cart
