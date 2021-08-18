import React from 'react'
import './index.scss'

export default function AboutComp() {
    return (
        <div className="about-comp my-4">
            <div className="container">
                <div className="elem row p-5">
                    <div className="d-none d-md-block col-12 col-md-5 my-auto">
                        <h2 className="h1 fw-bold">Sincere healthcare at the tip of your finger!</h2>
                        <p className="lead my-3">Yodawy is the answer to all your healthcare needs. Click below to know more!</p>
                        <input className="btn" type="button" value="About"/>
                    </div>
                    <div className="col-12 col-md-7 m-auto my-3">
                        <div className="box text-center">
                            <img src={"/images/header/mockup-slider-en.png"}/>
                        </div>
                    </div>
                    <div className="d-block d-md-none col-12 my-auto text-center">
                        <h2 className="h1 fw-bold">Sincere healthcare at the tip of your finger!</h2>
                        <p className="lead my-3">Yodawy is the answer to all your healthcare needs. Click below to know more!</p>
                        <input className="btn" type="button" value="About"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
