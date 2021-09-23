import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div class="signup">
            <div class="signup-wrapper">
                <h1>Create account</h1>
                <input placeholder="Name"></input>
                <input placeholder="Last name"></input>
                <input placeholder="email" type="email"></input>
                <input placeholder="Password" type="password"></input>
                <input placeholder="Re-type passwoord" type="password"></input>
                <button class="signup-button">Sign up</button>
            </div>
        </div>
    )
}
export default Signup
