import React from 'react';
import "./index.scss";

export default function Categories(){
    return(
        <div class="container">
        <h1 class="header">الفئات</h1>
        <div class="category__img-container">
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/images/Categories/oral care.jpg"}  class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">العناية بالفم</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/bath & body.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">مستلزمات الاستحمام</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/baby.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">مستلزمات الاطفال</h2>
                </div>
            </div>
        </div>
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/images/Categories/men care.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">مستلزمات الرجال</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/beauty.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">مستحضرات التجميل </h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/dermocosmatics.jpg"}  alt="" class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">منتجات التجميل الطبيه</h2>
                </div>
            </div>
        </div>
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/images/Categories/womencare.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">عالم المراة</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/personal care.jpg"} alt="" class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">العناية الشخصية</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/images/Categories/hair care.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">العناية بالشعر</h2>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}