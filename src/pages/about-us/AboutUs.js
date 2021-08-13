import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function AboutUs() {
    return (
        <div className="caro">
            <Carousel axis='vertical' showArrows={false} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#FF842B" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Medical Exchange Platform</h1>
                                        <h2 class="p-2">State-of-the-art API-connected healthcare platform</h2>
                                        <p class="p-2">We empower our partners through a digital infrastructure to deliver a seamless world-class experience for patients and consumers. We exist to simplify healthcare.</p>
                                        <a id="scroll1" href="#div2"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Pharmacy Benefit Management</h1>
                                        <h2 class="p-2">Innovative PBM solutions specifically designed for the local market</h2>
                                        <p class="p-2">The first of its kind in the region: A fully dedicated pharmacy benefit management solution designed with the local market needs in mind. Yodawy’s PBM connects pharmacies, health insurance providers, and patients through a sophisticated cloud-based approval engine.</p>
                                        <a id="scroll2" href="#div3"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#2ABFB4" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Automated Approval Engine</h1>
                                        <h2 class="p-2">AI-powered cloud-based approval engine</h2>
                                        <p class="p-2">Yodawy’s state-of-the-art approvals engine is a real-time platform, powered by artificial intelligence, and tailored to the local market. For health insurance use-cases; patients get to register using their insurance cards, request medications for home delivery, and receive instant approvals on Yodawy app.</p>
                                        <a id="scroll3" href="#div4"><i class="fas fa-long-arrow-alt-down">Scroll</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#8C93C7" }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">e-Prescription Doctor App</h1>
                                        <h2 class="p-2">A new era of prescriptions</h2>
                                        <p class="p-2">Yodawy’s e-Prescription app is the result of years of cooperation with doctors and healthcare professionals across multiple specialties to help design and develop the electronic prescription app. Doctors can now easily and instantly issue electronic prescriptions, complete with diagnosis and dosage details right to their patient’s phones! Forget the worries of reading or losing a prescription!</p>
                                        <a id="scroll4" href="#div5"><i class="fas fa-arrow-down"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: '#02408A' }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-12 text-center">
                                    <div class="row">
                                        <h1 class="p-3">Pharmacy Delivery App</h1>
                                        <h2 class="p-2">A seamless mobile app for patients & end-users</h2>
                                        <p class="p-2">Yodawy’s mobile app is designed, developed, and maintained by healthcare and software professionals granting you an easy-to-use and seamless way to order all your healthcare needs, cosmetics, and personal care items from the nearest licensed pharmacy. Gone are the days of pharmacy visits and waiting in phone call queues!</p>
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