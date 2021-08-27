import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/navbar/Navbar';
export default function ForInsurers() {
    return (
        <div className="caro">
            <Navbar compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#02408A" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-3">Health Insurance: Re-imagined</h1>
                                        <h2 className="col-10 p-2">Patient-centric experiences designed to make health insurance easier</h2>
                                        <div className="row my-2">
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/metlife.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/axa.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/mednet.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/amc.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/nextcare.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/unicare.png" />
                                            </div>
                                        </div>
                                        <p className="col-10 p-1">Our digital infrastructure is designed to transform health insurance providers and empower their end-to-end process. Patients simply add their insurance cards and order their medications to be delivered at home. We worry about the rest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center" style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators mt-5">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 text-center">
                                                <div className="row justify-content-center">
                                                    <h1 className="col-10 p-1">It’s Never Been Easier</h1>
                                                    <h2 className="col-10 p-1">With a swipe and a tap, patients can now use their insurance</h2>
                                                    <p className="col-10 p-1">Scroll right to explore Yodawy’s doctor app features and get to know why this solution is a true revolution in the digital healthcare world.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 text-center">
                                                <div className="row justify-content-center">
                                                    <h1 className="col-10 p-1">Scan Your Card</h1>
                                                    <p className="col-10 p-1">Once you login to Yodawy app, it will only take you a few minutes to complete your registration by scanning your insurance card or manually entering your insurance data.<br />It’s as easy as:</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>Choose your Healthcare provider to register</li>
                                                        <li>Scan your insurance card</li>
                                                        <li>Get verified instantly</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 text-center">
                                                <div className="row justify-content-center">
                                                    <h1 className="col-10 p-1">Upload Your Prescription</h1>
                                                    <p className="col-10 p-1">Upon completing your insurance registration, upload your insurance or monthly prescription. Confirm your request, sit back, and relax while we get approval for you.</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>Upload your prescription</li>
                                                        <li>Checkout with your cart</li>
                                                        <li>Select your delivery address</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 text-center">
                                                <div className="row justify-content-center">
                                                    <h1 className="col-10 p-1">Get Your Insurance Approval</h1>
                                                    <p className="col-10 p-1">As soon as we receive your prescription, our AI-powered engine takes over and the magic begins. We do the work for you:</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>Process the order</li>
                                                        <li>Get your approval</li>
                                                        <li>Forward it to your insurance provider</li>
                                                        <li>Send your order with the approval to a licensed pharmacy</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 text-center">
                                                <div className="row justify-content-center">
                                                    <h1 className="col-10 p-1">Receive Your Insurance Items</h1>
                                                    <p className="col-10 p-1">Your insurance items will arrive effortlessly to your doorstep. Just like that.</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>No waiting queues</li>
                                                        <li>No pharmacy visits</li>
                                                        <li>No filling of forms</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>

    )
}