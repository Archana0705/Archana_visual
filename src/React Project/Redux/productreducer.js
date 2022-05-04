import {createSlice} from "@reduxjs/toolkit"
export const add = createSlice({
    name:'counter',
    initialState:{
       value :[]
    },
    reducers:{
       addtocart: (state,product)=>{
       state.value.concat(product) 
       }, 
    },
})
export const{addtocart}=add.actions
export const selectCount=(state)=> state.addtocart.value
export default add.reducer