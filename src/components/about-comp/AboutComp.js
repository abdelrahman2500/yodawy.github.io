import React from 'react'
import './index.scss'

export default function AboutComp() {
    return (
        <div className="about-comp my-4">
            <div class="container">
                <div class="elem row p-5">
                    <div class="d-none d-md-block col-12 col-md-5 my-auto">
                        <h2 className="h1 fw-bold">Sincere healthcare at the tip of your finger!</h2>
                        <p className="lead my-3">Yodawy is the answer to all your healthcare needs. Click below to know more!</p>
                        <input class="btn" type="button" value="About"/>
                    </div>
                    <div class="col-12 col-md-7 m-auto my-3">
                        <div className="box text-center">
                            <img src={"/images/about-comp/about.png"}/>
                        </div>
                    </div>
                    <div class="d-block d-md-none col-12 my-auto text-center">
                        <h2 className="h1 fw-bold">Sincere healthcare at the tip of your finger!</h2>
                        <p className="lead my-3">Yodawy is the answer to all your healthcare needs. Click below to know more!</p>
                        <input class="btn" type="button" value="About"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
