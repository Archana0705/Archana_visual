import React from "react";
import {Route, Switch} from "react-router-dom"
import ProductsCom from "./Products/Product";
import Cart from "./Products/cart";
import Header from "./Products/header";
import ProductInfo from "./Products/Viewproduct";


const Routescom=({productItems, cartItems, handleAddProduct, handleRemoveProduct,viewItems})=>{
    return (
        <div>
            <Switch>
               <Route exact path="/home">
                   <Header/>
                </Route>
                <Route exact path="/Shop">
                    <ProductsCom productItems={productItems} handleAddProduct={handleAddProduct} />
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
                </Route>  
                <Route path="/view" exact>
                    <ProductInfo viewItems={viewItems}  cartItems={cartItems} handleAddProduct={handleAddProduct}/>
    </Route>            
    </Switch>
        </div>
    )
}
export default Routescom