import React from 'react'
import './index.scss'

export default function WhoWeAre() {
    return (
        <div className="who-we-are">
            <div className="container">
            <h1 className="text-center">Who We Are</h1>
            <p className="pp text-center" >Yodawy is Egypt’s leading health and wellbeing platform,<br/>and your one-stop-shop for everything you need to lead a healthy lifestyle.</p>

            <div className=" cont row text-center"  >
                <div className=" shop col-lg-4 col-md-4 col-sm-12">
                    <span className=" fa fa-shopping-cart fa-4x" ></span>
                    <h5>One-Stop-Shop</h5>
                    <p>Yodawy covers all your health and wellbeing needs, whether it is a pharmacy order, an insurance approval,
                         or even a quick consultation call.</p>

                </div>
                <div className="user col-lg-4 col-md-4 col-sm-12">
                    <span className=" fa fa-mobile fa-4x"></span>
                    <h5>User-Friendly Experience</h5>
                    <p>Yodawy builds cutting-edge healthcare platforms that aspire to make life easier for every patient.</p>

                </div>
                <div className="net col-lg-4 col-md-4 col-sm-12">
                    <span className="fa fa-phone fa-4x" ></span>
                    <h5>Accessible Network</h5>
                    <p>Yodawy connects you to +4,000 pharmacies across Egypt, with a customer support team available for your convenience 24/7.</p>

                </div>
                
            </div>

        </div>
        </div>
    )
}
