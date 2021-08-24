import React from 'react'
import NavbarAr from './../navbar/NavbarAr';
import FooterAr from './../footer/FooterAr';

import "./index.scss"

export default function NotFoundAr() {
    return (
        <div className="notfound">
            <NavbarAr compo={true} />
            <div className="container">
                <div className="notfoundpage text-danger">
                    <i className="fas fa-exclamation"></i>
                    <p className="lead my-3 fw-bold">هذه الصفحة غير موجودة</p>
                </div>
            </div>
            <FooterAr />
        </div>
    )
}
