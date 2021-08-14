import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';

export default function Categories(){
    return(
        <div className="categories text-center my-4">
            <div className="container">
                <h2 className="h1 fw-bold mb-4">الفئات</h2>
                {/* <!-- Gallery --> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/dermocosmatics.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">منتجات التجميل الطبيه</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/personal-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">العناية الشخصية</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/oral-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">العناية بالفم</h4>
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
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">مستلزمات الرجال</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/baby.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">مستلزمات الأطفال</h4>
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
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">مستلزمات الإستحمام</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-50 pb-4">
                            <img
                            src={"/images/Categories/hair-care.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">العناية بالشعر</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="box position-relative rounded w-100 h-25 pb-4">
                            <img
                            src={"/images/Categories/contact-lenses.jpg"}
                            className="w-100 h-100"
                            alt=""
                            />
                            <Link to="/shop">
                                <div className="title rounded position-absolute mb-4">
                                    <h4 className="fw-bold">عدسات لاصقة</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


{/* <div class="categories">
<div class="container">
<h1 class="header">الفئات</h1>
<div class="category__img-container">
<div class="category__img">
    <div class="category__img-overlay">
        <img src={"/images/Categories/oral care.jpg"}  class="category__img-one"/>
        <div class="category__data">
            <h3 class="category__title">العناية بالفم</h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/bath & body.jpg"}  alt="" class="category__img-two"/>
        <div class="category__data">
            <h3 class="category__title">مستلزمات الاستحمام</h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/baby.jfif"}  alt="" class="category__img-three"/>
        <div class="category__data">
            <h3 class="category__title">مستلزمات الاطفال</h3>
        </div>
    </div>
</div>
<div class="category__img">
    <div class="category__img-overlay">
        <img src={"/images/Categories/men care.jpg"}  alt="" class="category__img-two"/>
        <div class="category__data">
            <h3 class="category__title">مستلزمات الرجال</h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/beauty.jfif"}  alt="" class="category__img-three"/>
        <div class="category__data">
            <h3 class="category__title">مستحضرات التجميل </h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/dermocosmatics.jpg"}  alt="" class="category__img-one"/>
        <div class="category__data">
            <h3 class="category__title">منتجات التجميل الطبيه</h3>
        </div>
    </div>
</div>
<div class="category__img">
    <div class="category__img-overlay">
        <img src={"/images/Categories/womencare.jfif"}  alt="" class="category__img-three"/>
        <div class="category__data">
            <h3 class="category__title">عالم المراة</h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/personal care.jpg"} alt="" class="category__img-one"/>
        <div class="category__data">
            <h3 class="category__title">العناية الشخصية</h3>
        </div>
    </div>
    <div class="category__img-overlay">
        <img src={"/images/Categories/hair care.jpg"}  alt="" class="category__img-two"/>
        <div class="category__data">
            <h3 class="category__title">العناية بالشعر</h3>
        </div>
    </div>
</div>
</div>
</div>
</div> */}