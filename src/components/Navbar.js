import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div class="wrapper">
        <navbar>
        <h1>To-do app</h1>
        <button>
            <div class="line"></div>
            <div class="line "></div>
            <div class="line"></div>
        </button>
        <ul>
            <Link to="/" class="link">Premium</Link>
            <Link to ="/about" class="link">About</Link>
            <Link to ="/sign-in" class="link"><div class="navbar-button">Sign-in</div></Link>
            <Link to ="/signup" class="link"><div class="navbar-button">Sign-up</div></Link>
        </ul>
        </navbar>
        </div>
    )
}

export default Navbar
