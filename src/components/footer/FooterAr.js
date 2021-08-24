import React from 'react'
import BranchesAr from '../branches/BranchesAr'

export default function FooterAr() {
    return (
        <div className="footer text-center">
            <div className="need-help bg-dark text-white p-3">
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <h2 className="h5 fw-bold my-3 mx-0">هل تريد مساعدة؟</h2>
                        <h3 className="h2 fw-bold my-3 mx-0">15005</h3>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="lead">نحن في خدمتكم 7 أيام في الأسبوع لمدة 24 ساعة!</p>
                        <button className="btn btn-warning p-3 ">hello@yodawy.com</button>
                        <div className="icons mt-3">
                            <span>
                                <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BranchesAr nothome={false} className="m-0" />
            <p className="lead fw-bold bg-dark text-white p-3 border-top">
                حقوق النشر © {new Date().getFullYear()} يُداوي. كل الحقوق محفوظة   
            </p>
        </div>
    )
}
