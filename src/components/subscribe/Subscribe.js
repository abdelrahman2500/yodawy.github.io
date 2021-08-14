import React from 'react'
import "./index.scss"

export default function Subscribe() {
    return (
        <div className="subscribe text-center p-5 my-3 en" >
            <div className="container">
                <h2 className="h1 m-auto mb-4 fw-bold">Subscribe to our newsletter and stay up to date with <br />
                    Yodawy’s latest offers and deals.</h2>
                <form className="m-auto my-3">
                    <input className="btnm px-5 py-3" type="email" placeholder="Enter your email address" required />
                    <input className="btns px-5 py-3 fw-bold" type="button" value="Subscribe"/>
                </form> 
            </div>
        </div>
    )
}
