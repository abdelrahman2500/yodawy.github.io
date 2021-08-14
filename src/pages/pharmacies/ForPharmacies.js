import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ForPharmacies() {
    return (
        <div className="caro">
            <Carousel axis='vertical' showArrows={false} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#FFB800" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Meet Your Growth Partner</h1>
                                        <h2 class="p-2">Yodawy helps grow your business from day one</h2>
                                        <p class="p-2">Grow your sales, gain exposure to customers beyond your usual zone and get instant access to exclusive rebate rates and products. Pharmacies can now process more orders through our dedicated portals that are designed for speed and agility.</p>
                                        <a id="scroll1" href="#div2"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#F45E5F" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Grow Your Sales</h1>
                                        <h2 class="p-2">Increased Traffic and Revenue</h2>
                                        <p class="p-2">Yodawy’s pharmacy network enjoys increased order traffic to their channels via the Pharmacy and Partners Portal. The remarkable boost in sales and revenue encourages more than more 2,000 pharmacies in Egypt to consider Yodawy their digital gateway of choice.</p>
                                        <a id="scroll2" href="#div3"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#696B8D" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Access New Customers</h1>
                                        <h2 class="p-2">Get access to millions of customers in a matter of seconds</h2>
                                        <p class="p-2">Yodawy grants our expanding network of over 2,000 licensed pharmacies across all governorates in Egypt access to a quickly growing consumer base. From young mothers looking for an easy-to-use trusted platform to order the family’s daily essentials, to chronic patients looking for a reliable partner to get their medications each month hassle-free.</p>
                                        <a id="scroll3" href="#div4"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#87C36C" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Offer Exclusive Products</h1>
                                        <h2 class="p-2">Be a part of a network that offers exclusive discounts and products</h2>
                                        <p class="p-2">odawy is the partner of choice for some of the biggest international consumer brands. Our partnerships extend from pharma companies to FMCG, enabling us to provide your licensed pharmacy with the most exclusive products and discounts in the market.</p>
                                        <a id="scroll4" href="#div5"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: '#891E4A' }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Best-In-Class Partner Benefits</h1>
                                        <h2 class="p-2">Join our PBM and premium partner network</h2>
                                        <p class="p-2">Yodawy extends its digital infrastructure to its growing network of licensed pharmacies, empowering them to better serve customers. Our PBM was built from the ground up with pharmacy operations in mind to help you benefit from digital claims processing, analytics dashboard, and a 24/7 support team available for your support</p>
                                        <a class="text-white">Scroll Top<i class="fas fa-long-arrow-alt-up"></i></a>
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