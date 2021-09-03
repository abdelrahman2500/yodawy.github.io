import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import { Context } from './../../context/Context';

export default function Categories(){
    const context = useContext(Context)
    return(
        <div className="categories text-center my-4">
            <div className="container">
                <h2 className="h1 fw-bold mb-4">categories</h2>
                {/* <!-- Gallery --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/dermocosmatics.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "dermocosmetics"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">dermocosmetics</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/personal-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "personal care"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">personal care</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/oral-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "oral care"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">oral care</h4>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                    
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/men-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "men care"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">men care</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/baby.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "baby"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">baby</h4>
                                </div>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                    
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/bath-body.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "bath body"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">bath & body</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/hair-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "hair care"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">hair care</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/contact-lenses.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryName == "contact lences"))}>
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">contact lences</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
{/* <!-- Gallery --> */}


                {/* <h1 className="header">Categories</h1>
                <div className="category__img-container">
                <div className="category__img">
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/oral-care.jpg"}  className="category__img-one"/>
                        <div className="category__data">
                            <h2 className="category__title">Oral Care</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/bath-body.jpg"}  alt="" className="category__img-two"/>
                        <div className="category__data">
                            <h2 className="category__title">bath&body</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/baby.jpg"}  alt="" className="category__img-three"/>
                        <div className="category__data">
                            <h2 className="category__title">baby</h2>
                        </div>
                    </div>
                </div>
                <div className="category__img">
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/men-care.jpg"}  alt="" className="category__img-two"/>
                        <div className="category__data">
                            <h2 className="category__title">men care</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/beauty.jpg"}  alt="" className="category__img-three"/>
                        <div className="category__data">
                            <h2 className="category__title">beauty</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/dermocosmatics.jpg"}  alt="" className="category__img-one"/>
                        <div className="category__data">
                            <h2 className="category__title">dermocosmatics</h2>
                        </div>
                    </div>
                </div>
                <div className="category__img">
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/contact-lenses.jpg"}  alt="" className="category__img-three"/>
                        <div className="category__data">
                            <h2 className="category__title">contact lenses</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/personal-care.jpg"} alt="" className="category__img-one"/>
                        <div className="category__data">
                            <h2 className="category__title">personal care</h2>
                        </div>
                    </div>
                    <div className="category__img-overlay">
                        <img src={"/images/Categories/hair-care.jpg"}  alt="" className="category__img-two"/>
                        <div className="category__data">
                            <h2 className="category__title">hair care</h2>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    );
}