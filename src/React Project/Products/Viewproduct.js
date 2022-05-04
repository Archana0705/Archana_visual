import React from "react"

const ProductInfo=({viewItems}) =>{
 
    return (
        <div>
        {viewItems.map((item)=>(
            <div key={item.id} className="cart-items-list">
                <img className="cart-items-image"src={item.image} alt={item.productName}/>
                <div>
                    <p className="cart-items-name">{item.productName}</p>
                    </div>
                    <div>
                    <p>₹{item.price}</p>
                    </div>
                </div>              
        ))}
    </div>
    );
}

export default ProductInfo