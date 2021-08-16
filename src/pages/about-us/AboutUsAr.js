import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarAr from '../../components/navbar/NavbarAr';
export default function AboutUsAr() {
    return (
        <div className="caro">
            <NavbarAr compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#FF842B" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">منصة التبادل الطبي</h1>
                                        <h2 className="col-10 p-1">منصة رعاية صحية حديثة بواجهة عصرية</h2>
                                        <p className="col-10 p-1">يهدف يُداوي لتبسيط الرعاية الصحية في مصر. ويسعى لتمكين الشركاء بتوفير بنية تحتية رقمية تُساعدهم في تقديم خدمة على أعلى مستوى للمرضى والمستهلكين.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#09A4E9" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">إدارة مزايا الصيدليات</h1>
                                        <h2 className="col-10 p-1">حلول مبتكرة لإدارة الصيدليات بتصميم يُواكب السوق المحلي</h2>
                                        <p className="col-10 p-1">يُقدّم يُداوي منصة شاملة لإدارة مزايا الصيدليات، مصممة لتلبية احتياجات السوق المحلي. حيث يربط بين الصيدليات، وشركات التأمين، والمرضى باستخدام محرك موافقات متطوّر.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#2ABFB4" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">محرك موافقات التأمين</h1>
                                        <h2 className="col-10 p-1">محرك موافقات آلي مدعوم بالذكاء الاصطناعي</h2>
                                        <p className="col-10 p-1">محرك موافقات التأمين المتطور من يُداوي هو منصة سريعة مصممة خصيصًا للسوق المحلي. يستطيع المرضى تسجيل بطاقات التأمين، وطلب روشتة التأمين، واستقبال الموافقات على التطبيق مباشرةً.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#8C93C7" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">تطبيق الروشتات الإلكترونية للأطباء</h1>
                                        <h2 className="col-10 p-1">عصر جديد للروشتات الطبية</h2>
                                        <p className="col-10 p-1">تطبيق الروشتات من يُداوي هو نتاج التعاون مع العديد من الأطباء في مختلف التخصصات من أجل تطوير عملية كتابة الروشتات الطبية. ويستطيع الأطباء الآن كتابة وإرسال روشتات إلكترونية مفصلة بكل سهولة إلى المرضى فورًا. انسى هموم قراءة أو فقدان الروشتة!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: '#02408A' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">تطبيق طلبات الصيدلية</h1>
                                        <h2 className="col-10 p-1">تطبيق متطور سهل الاستخدام للمرضى والمستهلكين</h2>
                                        <p className="col-10 p-1">صُمِّمَ تطبيق يُداوي المحمول بواسطة خبراء في مجال الرعاية الصحية والبرمجة، ليمنحك وسيلة سلسة وسهلة الاستخدام لطلب جميع احتياجاتك من مستحضرات التجميل والرعاية الشخصية من أقرب صيدلية مرخصة ومعتمدة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}