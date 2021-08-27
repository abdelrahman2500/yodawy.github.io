import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarAr from '../../components/navbar/NavbarAr';
export default function ForDoctorsAr() {
    return (
        <div className="caro">
            <NavbarAr compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">طفرة في عالم الأطباء</h1>
                                        <h2 className="col-10 p-1">عصر الروشتات الجديدة للطبيب العصري</h2>
                                        <p className="col-10 p-1">“يُداوي للأطباء” هو تطبيق يُقدّم حلولاً رقمية مبتكرة لمساعدة الأطباء في المهام الإدارية حتى يتفرّغوا لتقديم الرعاية الطبية. حيث يستطيع الأطباء والمرضى توفير الوقت من خلال عملية رقمية بسيطة عن طريق إصدار روشتات إلكترونية فورية.</p>
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
                                                    <h1 className="col-10 p-1">تعرّف على تطبيق يُداوي للأطباء</h1>
                                                    <p className="col-10 p-1">اسحب الشاشة إلى اليمين لتكتشف مزايا تطبيق يُداوي للأطباء وتتعرف على الأسباب التي تجعل منه طفرة حقيقية في عالم الرعاية الصحية الرقمي.</p>
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
                                                    <h1 className="col-10 p-1">روشتات رقمية حديثة</h1>
                                                    <h2 className="col-10 p-1">مصمّمة مع وضع احتياجات الأطباء في الاعتبار</h2>
                                                    <p className="col-10 p-1">يتطلّب منا العصر الحالي التخلص من جميع التعاملات الجسدية غير الضرورية قدر الإمكان، لهذا صُمّمت الروشتات الإلكترونية من يُداوي خصيصًا لتلبية احتياجات الطبيب المُعاصر، سواءً بإضافة التعليمات لمريضه أو تحديد الجرعات ومدتها وتكراريتها. تطبيق يُداوي للأطباء هو بداية العصر الجديد.</p>
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
                                                    <h1 className="col-10 p-1">نماذج للروشتات المتكررة</h1>
                                                    <h2 className="col-10 p-1">يُمكن حفظها للحالات الشائعة</h2>
                                                    <p className="col-10 p-1">بفضل تصميم يُداوي بالتعاون مع أفضل الأطباء في جميع التخصصات، يُتيح تطبيق يُداوي للأطباء إنشاء وحفظ نماذج روشتات للحالات الأكثر شيوعًا. وبعدها يستطيع الأطباء توفير الوقت باستخدام النماذج المحفوظة مسبقاً أكثر من مرة مع الحالات المستقبلية.</p>
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
                                                    <h1 className="col-12 col-10 p-1">قاعدة بيانات الأطباء</h1>
                                                    <p className="col-12 col-10 p-1">يفتخر يُداوي بتقديم قاعدة بيانات متطورة تسمح للأطباء بالاختيار بين مجموعة كبيرة من الاختيارات المتاحة في السوق، وهي مصممة لتلبية احتياجات كل تخصص. وباستخدام التطبيق، يُمكن للأطباء الآن:</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>البحث عن احتياجاتهم من الصيدلية</li>
                                                        <li>التحقق من توافر المنتجات في السوق</li>
                                                        <li>معرفة أحدث الأسعار</li>
                                                        <li>اختيار البدائل</li>
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
                                                    <h1 className="col-10 p-1">شبكة صيدليات واسعة الانتشار</h1>
                                                    <h2 className="col-10 p-1">تغطية تشمل جميع محافظات مصر</h2>
                                                    <p className="col-10 p-1">يربط يُداوي الأطباء بشبكة ممتدة تضم أكثر من 4,000 صيدلية معتمدة، مع انتشار يُغطي 28 محافظة داخل مصر لتلبية احتياجات الأطباء ومرضاهم أينما كانوا. ويتلقى المرضى روشتاتهم الإلكترونية على الفور عبر الرسائل النصية القصيرة، أو واتساب، أو تطبيق يُداوي حتى يستخدموها في الطلب من أقرب صيدلية مرخصة.</p>
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