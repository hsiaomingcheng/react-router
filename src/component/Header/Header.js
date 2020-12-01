import React from "react";
import {
    Link
} from "react-router-dom";
import {useAuth} from "../../context";

export default function Header() {
    const auth = useAuth();
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/product2">Product2</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <button onClick={auth.toggleUser}>登出 - Log Out</button>
        </>
    );
}