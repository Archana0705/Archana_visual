import './App.css';
import CardsCom from './components/database';
/* import 'font-awesome/css/font-awesome.min.css'
import data from './React Project/productData';
import Routescom from './React Project/RoutesCom';
import {BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Header from './React Project/Products/header';
import FormValidation from './components/Form Validation/form';
import LoginComponent from './React Project/Products/Login2';
import LoginPagecom from './React Project/Products/login';
import LoginValidation from './components/newlogin';
import Card from './components/database'; */
import Cards from './components/database';

function App() {
  /* const {productItems} = data;
  const [cartItems, setCartItems]=useState([])
  const [viewItems,setViewItems]=useState([])npm
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
       setCartItems(cartItems.map((item)=> item.id===product.id ?
       {...ProductExist, quantity: ProductExist.quantity+1}: item)
       );
    }
    else{
       setCartItems([...cartItems, {...product, quantity:1 }])
    }
  };
  const viewProduct = (product) =>{
    const ProductExist = viewItems.find((item) => item.id === product.id);
    if(ProductExist){
       setViewItems(viewItems.map((item)=> item.id===product.id ?
       {...ProductExist, quantity: ProductExist.quantity+1}: item)
       );
    }
    else{
       setViewItems([...viewItems, {...product, quantity:1 }])
    }
  };
  const handleRemoveProduct = (product)=>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=> item.id!== product.id));
    }else{
      setCartItems(cartItems.map((item)=>item.id === product.id ?{...ProductExist,quantity: ProductExist.quantity -1}:item
      ));
    }
  } */
  return(
    <div>
   {/* <Router>
  <Header/>
 <Routescom productItems={productItems} cartItems={cartItems} viewItems={viewItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} viewProduct={viewProduct}/>
 </Router> */}
     <CardsCom/>
    </div>
  );
}
export default App;
