import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ForPharmacies() {
    return (
        <div className="caro">
            <Carousel axis='vertical' showArrows={false} emulateTouch={true} showThumbs={false} >
                <div>
                    <div style={{height: '100vh', backgroundColor: "blue"}}>

                    </div>
                </div>
                <div>
                    <div style={{height: '100vh', backgroundColor: "yellow"}}></div>
                </div>
                <div > 
                    <div style={{height: '100vh', backgroundColor: "red"}}></div>
                </div>
                <div > 
                    <div style={{height: '100vh', backgroundColor: "green"}}></div>
                </div>
            </Carousel>
        </div>
    )
}