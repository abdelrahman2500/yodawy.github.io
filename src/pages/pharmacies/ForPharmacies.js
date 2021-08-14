import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/navbar/Navbar';
export default function ForPharmacies() {

    return (
        <div className="caro">
            <Navbar compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#FFB800" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Meet Your Growth Partner</h1>
                                        <h2 className="col-10 p-1">Yodawy helps grow your business from day one</h2>
                                        <p className="col-10 p-1 px-2">Grow your sales, gain exposure to customers beyond your usual zone and get instant access to exclusive rebate rates and products. Pharmacies can now process more orders through our dedicated portals that are designed for speed and agility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#F45E5F" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Grow Your Sales</h1>
                                        <h2 className="col-10 p-1">Increased Traffic and Revenue</h2>
                                        <p className="col-10 p-1 px-2">Yodawy’s pharmacy network enjoys increased order traffic to their channels via the Pharmacy and Partners Portal. The remarkable boost in sales and revenue encourages more than more 2,000 pharmacies in Egypt to consider Yodawy their digital gateway of choice.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#696B8D" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Access New Customers</h1>
                                        <h2 className="col-10 p-1">Get access to millions of customers in a matter of seconds</h2>
                                        <p className="col-10 p-1 px-2">Yodawy grants our expanding network of over 2,000 licensed pharmacies across all governorates in Egypt access to a quickly growing consumer base. From young mothers looking for an easy-to-use trusted platform to order the family’s daily essentials, to chronic patients looking for a reliable partner to get their medications each month hassle-free.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#87C36C" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Offer Exclusive Products</h1>
                                        <h2 className="col-10 p-1">Be a part of a network that offers exclusive discounts and products</h2>
                                        <p className="col-10 p-1 px-2">odawy is the partner of choice for some of the biggest international consumer brands. Our partnerships extend from pharma companies to FMCG, enabling us to provide your licensed pharmacy with the most exclusive products and discounts in the market.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: '#891E4A' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Best-In-className Partner Benefits</h1>
                                        <h2 className="col-10 p-1">Join our PBM and premium partner network</h2>
                                        <p className="col-10 p-1 px-2">Yodawy extends its digital infrastructure to its growing network of licensed pharmacies, empowering them to better serve customers. Our PBM was built from the ground up with pharmacy operations in mind to help you benefit from digital claims processing, analytics dashboard, and a 24/7 support team available for your support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}