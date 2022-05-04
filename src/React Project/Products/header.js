import React from "react";
import { Link } from "react-router-dom";
import "../Products/header.css"
const Header = () => {
    return (
        <header className="header">
            <div >
                <h1 className="shop">
                    <Link to="/" className="logo">Shop</Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/Cart" className="cart">
                        <i className="fas fa-shopping-cart"/></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/view" className="cart">
                        View</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header