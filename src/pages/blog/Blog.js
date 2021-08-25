import React from 'react'

import './index.scss'
import Navbar from './../../components/navbar/Navbar';
import Footer from './../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Branches from './../../components/branches/Branches';

export default function Blog() {
    return (
        <div className="blog">
        <Navbar  compo={true}/>
        <Branches nothome={false} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 ">
                        <div className="blogcard row">
                            <div className=" col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/mid-section-woman-having-stomach-ache_23-2147948390.jpeg"/>
                                    </div> 
                                    <div className="card-body px-0">
                                        <h6 className="card-title">March 22, 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>What are the symptoms of irritable bowel syndrome (IBS)?</h4></Link>
                                            <p>The irritable bowel syndrome (IBS), also known as “irritable colon”, is a common long-term disorder that affects the large intestine with symptoms varied in severity and duration from one individual to the other.</p>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/diana-polekhina-ZSpkUThb7qk-unsplash-992x525.jpg" />
                                    </div>
                                        <div className="card-body px-0">
                                        <h6 className="card-title">March 22, 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>How many calories should I eat every day?</h4></Link>
                                            <p>This is the question most people ask, wondering if this food or that is good for their diet or not. And calories in this regard are the amount of energy we get from the foods we consume.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/john-cameron-9xpBfMMcCj4-unsplash-992x525.jpg"/>
                                    </div>
                                        <div className="card-body px-0">
                                        <h6 className="card-title">March 22, 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>What’s the difference between Antigen and PCR tests for Coronavirus?</h4></Link>
                                            <p>The spread of SARS-CoV-2 and its disease Covid-19 caused a lot of controversies and transformed the shape of modern life in many aspects.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-4 col-lg-4">
                        <div className="row d-none d-md-block">
                            <div className="category col-12 mb-4">
                                <h3 className="fw-bold mb-3">Categories</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">Fitness & Lifestyle</p>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">Health Advice</p>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">World After Covid-19</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tags col-12">
                                <h3 className="fw-bold mb-3">Tags</h3>
                                <div className="t text-uppercase">
                                    <span className="m-1"><Link to="/blog">antigen</Link></span>
                                    <span className="m-1"><Link to="/blog">calories</Link></span>
                                    <span className="m-1"><Link to="/blog">oronavirus</Link></span>
                                    <span className="m-1"><Link to="/blog">covid-19</Link></span>
                                    <span className="m-1"><Link to="/blog">healthy advice</Link></span>
                                    <span className="m-1"><Link to="/blog">healthy life</Link></span>
                                    <span className="m-1"><Link to="/blog">ibs</Link></span>
                                    <span className="m-1"><Link to="/blog">life style</Link></span>
                                    <span className="m-1"><Link to="/blog">pcr</Link></span>
                                    <span className="m-1"><Link to="/blog">symptoms</Link></span>
                                    <span className="m-1"><Link to="/blog">fitness</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="drops d-md-none mb-5">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Categories
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="category">
                                            <div className="row">
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">Fitness & Lifestyle</p>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">Health Advice</p>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">World After Covid-19</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Tags
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="tags col-12">
                                                <div className="t text-uppercase">
                                                    <span className="m-1"><Link to="/blog">antigen</Link></span>
                                                    <span className="m-1"><Link to="/blog">calories</Link></span>
                                                    <span className="m-1"><Link to="/blog">oronavirus</Link></span>
                                                    <span className="m-1"><Link to="/blog">covid-19</Link></span>
                                                    <span className="m-1"><Link to="/blog">healthy advice</Link></span>
                                                    <span className="m-1"><Link to="/blog">healthy life</Link></span>
                                                    <span className="m-1"><Link to="/blog">ibs</Link></span>
                                                    <span className="m-1"><Link to="/blog">life style</Link></span>
                                                    <span className="m-1"><Link to="/blog">pcr</Link></span>
                                                    <span className="m-1"><Link to="/blog">symptoms</Link></span>
                                                    <span className="m-1"><Link to="/blog">fitness</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
