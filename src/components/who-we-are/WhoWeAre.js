import React from 'react'
import './index.scss'

export default function WhoWeAre() {
    return (
        <div className="who-we-are my-3 en">
            <div className="container">
                <div className="top mb-5">
                    <h2 className="text-center h1 fw-bold">Who We Are ?</h2>
                    <p className="pp lead text-center" >Yodawy is Egypt’s leading health and wellbeing platform,<br/>and your one-stop-shop for everything you need to lead a healthy lifestyle.</p>
                </div>
                <div className="cont row text-center"  >
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-shopping-cart fa-3x mb-4" ></i>
                        <h5 className="fw-bold">One-Stop-Shop</h5>
                        <p className="lead">Yodawy covers all your health and wellbeing needs, whether it is a pharmacy order, an insurance approval,
                            or even a quick consultation call.</p>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-mobile fa-3x mb-4"></i>
                        <h5 className="fw-bold">User-Friendly Experience</h5>
                        <p className="lead">Yodawy builds cutting-edge healthcare platforms that aspire to make life easier for every patient.</p>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-phone fa-3x mb-4" ></i>
                        <h5 className="fw-bold">Accessible Network</h5>
                        <p className="lead">Yodawy connects you to +4,000 pharmacies across Egypt, with a customer support team available for your convenience 24/7.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
