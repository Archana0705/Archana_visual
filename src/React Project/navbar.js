import React from "react"
import "../React Project/navbar.css"

function Navigationbar(){
    return(
        <>
          <nav>
        <input type="checkbox" id="check"></input>
             <label for="check" class="checkbtn">
         ...
        </label>
        <label class="logo">DesignX</label>
        <ul>
          <form class="d-flex" id="form_one">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn search-btn" type="submit">Search</button>
            <li>
            
            <i class="fa fa-shopping-cart" id="cart-li"><span id="cart_count"><sup>0</sup></span></i>
         
            </li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </form>    
        </ul>
        </nav>
        </>
    )
}
export default Navigationbar