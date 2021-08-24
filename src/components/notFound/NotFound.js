import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from './../footer/Footer';

import "./index.scss"

export default function NotFound() {
    return (
        <div className="notfound">
            <Navbar compo={true} />
            <div className="container">
                <div className="notfoundpage text-danger">
                    <i className="fas fa-exclamation"></i>
                    <p className="lead my-3 fw-bold">this page is not found</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
