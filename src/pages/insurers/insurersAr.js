import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarAr from './../../components/navbar/NavbarAr';
export default function ForInsurersAr() {
    return (
        <div className="caro">
            <NavbarAr compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#02408A" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-3">التأمين الطبي: رؤية جديدة!</h1>
                                        <h2 className="col-10 p-2">تجارب مصممة خصيصًا لتسهيل التأمين الطبي لكل مريض</h2>
                                        <div className="row my-2">
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/metlife.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/axa.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/mednet.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/amc.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/nextcare.png" />
                                            </div>
                                            <div className="col-2 d-none d-sm-block p-lg-5">
                                                <img className="img-responsive" src="../images/logo/unicare.png" />
                                            </div>
                                        </div>
                                        <p className="col-10 p-1">محرك موافقات التأمين الطبية من يُداوي مصمم خصيصًا لإحداث طفرة في خدمة تقديم الرعاية الصحية، وتمكين مقدميها من إتمام عمليات طلب الموافقات بسرعة ودقة. حيث يستطيع المرضى إضافة بيانات بطاقة التأمين، وطلب روشتات التأمين، واستلامها في المنزل بدون عناء</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center" style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators mt-5">
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
                                                    <h1 className="col-10 p-1">تجربة التأمين الطبي بكل سهولة</h1>
                                                    <h2 className="col-10 p-1">يمكن للمرضى الآن الاستفادة بتأمينهم الطبي بخطوات بسيطة</h2>
                                                    <p className="col-10 p-1">كل ما تحتاجه هو تنفيذ خطوات بسيطة على تطبيق يُداوي لتسجيل بيانات بطاقة التأمين وطلب احتياجاتك التأمينية. اسحب الشاشة لليمين لتعرف الخطوات</p>
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
                                                    <h1 className="col-10 p-1">صوّر بطاقة التأمين</h1>
                                                    <p className="col-10 p-1">بمجرد تسجيل الدخول على تطبيق يُداوي، تستطيع إكمال التسجيل في بضع دقائق عن طريق إضافة بيانات بطاقة التأمين.</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>اختر مقدم خدمة التأمين الصحي</li>
                                                        <li>صوّر بطاقة التأمين</li>
                                                        <li>احصل على موافقة فورية</li>
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
                                                    <h1 className="col-10 p-1">حمّل روشتتك الطبية</h1>
                                                    <p className="col-10 p-1">بعد تسجيل بياناتك التأمينية، قُم بتحميل روشتتك الطبية. ولا تشغل بالك بمجرد تأكيد طلبك، حيث سيقوم يُداوي بالمطلوب</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>حمّل روشتتك الطبية</li>
                                                        <li>أضف عنوان التوصيل</li>
                                                        <li>اختر طريقة الدفع</li>
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
                                                    <h1 className="col-10 p-1">احصل على موافقة التأمين</h1>
                                                    <p className="col-10 p-1">بمجرد استلامنا للروشتة، سيقوم المُحرّك المدعوم بالذكاء الاصطناعي بسرعةٍ شبه فورية بتنفيذ الآتي</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>تحويل الطلب إلى شركة التأمين الخاصة</li>
                                                        <li>الحصول على الموافقة</li>
                                                        <li>إرسال الموافقة التأمينية مع طلبك</li>
                                                        <li>إلى أقرب صيدلية معتمدة</li>
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
                                                    <h1 className="col-10 p-1">احصل على طلبات روشتة التأمين في المنزل</h1>
                                                    <p className="col-10 p-1">في أسرع وقتٍ ممكن، ستصلك طلبات روشتة التأمين بأقل مجهود إلى باب منزلك.</p>
                                                    <ul className="col-12 col-lg-4 m-auto">
                                                        <li>بدون الانتظار في طوابير</li>
                                                        <li>بدون ملء استمارات</li>
                                                        <li>بدون زيارة صيدليات</li>
                                                    </ul>
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