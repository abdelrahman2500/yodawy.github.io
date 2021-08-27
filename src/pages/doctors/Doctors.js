import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/navbar/Navbar';
export default function ForDoctors() {
    return (
        <div className="caro">
            <Navbar compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">Revolutionizing Prescriptions</h1>
                                        <h2 className="col-10 p-1">A new era of prescriptions- for empowered doctor</h2>
                                        <p className="col-10 p-1">Yodawy’s Doctor App is an innovative digital solution that enables physicians to focus on their medical practice rather than administration. Through issuing pre-approved prescriptions, doctors and patients save valuable time with an effortlessly digitized process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center" style={{ height: '100vh', backgroundColor: "#FF963C" }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
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
                                                    <h1 className="col-10 p-1">Get To Know The Doctor’s App</h1>
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
                                                    <h1 className="col-10 p-1">Modern Digital Prescriptions</h1>
                                                    <h2 className="col-10 p-1">Designed with Doctors’ Needs in Mind</h2>
                                                    <p className="col-10 p-1">It has never been more essential to eliminate all unnecessary contact and physical interactions than now. Yodawy’s e-prescriptions are designed specifically to meet the needs of the modern-day doctor, whether by adding diagnosis or intuitively selecting dosages, frequencies, and durations- Yodawy’s doctor app is a beginning of a new era.</p>
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
                                                    <h1 className="col-10 p-1">Frequent Prescription Templates</h1>
                                                    <h2 className="col-10 p-1">Customizable for Common Cases</h2>
                                                    <p className="col-10 p-1">Since Yodawy for Doctors is crafted in collaboration with top doctors in every specialty, doctors can create and save prescription templates for the most common types of cases on the app, and use these pre-saved templates repetitively with future cases to save time.</p>
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
                                                    <h1 className="col-12 col-10 p-1">Yodawy Doctors Database</h1>
                                                    <p className="col-12 col-10 p-1">Yodawy takes pride in its cutting-edge database where doctors can easily choose from a wide spectrum of available items specifically-tailored for each speciality.</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>Search for pharmacy needs</li>
                                                        <li>Check for availability</li>
                                                        <li>Find updated prices</li>
                                                        <li>Select alternatives</li>
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
                                                    <h1 className="col-10 p-1">Extended Pharmacy Network</h1>
                                                    <h2 className="col-10 p-1">We’ve Got You Covered Wherever You Are</h2>
                                                    <p className="col-10 p-1">Yodawy connects doctors to a huge network of +4,000 pharmacies, spread across 28 governorates, catering to every doctor and their patient’s needs wherever they are. Patients receive their e-prescriptions instantly through SMS, WhatsApp, or the Yodawy user app to order from the nearest licensed pharmacy.</p>
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