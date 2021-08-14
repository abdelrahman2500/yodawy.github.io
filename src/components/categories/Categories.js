import react from 'react';
import "./index.scss";

export default function Categories(){
    return(
        <div class="container">
        <h1 class="header">Categories</h1>
        <div class="category__img-container">
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/oral care.jpg"}  class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">Oral Care</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/bath & body.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">bath & body</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/baby.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">baby</h2>
                </div>
            </div>
        </div>
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/men care.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">men care</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/beauty.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">beauty</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/dermocosmatics.jpg"}  alt="" class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">dermocosmatics</h2>
                </div>
            </div>
        </div>
        <div class="category__img">
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/womencare.jfif"}  alt="" class="category__img-three"/>
                <div class="category__data">
                    <h2 class="category__title">women.care</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/personal care.jpg"} alt="" class="category__img-one"/>
                <div class="category__data">
                    <h2 class="category__title">personal.care</h2>
                </div>
            </div>
            <div class="category__img-overlay">
                <img src={"/public/images/Categories/hair care.jpg"}  alt="" class="category__img-two"/>
                <div class="category__data">
                    <h2 class="category__title">hair care</h2>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}