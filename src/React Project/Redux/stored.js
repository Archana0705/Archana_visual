import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productreducer";
export default configureStore({
    reducer:{
       addtocart: productreducer
    }
})
