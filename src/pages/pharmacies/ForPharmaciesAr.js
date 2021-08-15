import React from 'react'
import "./index.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarAr from './../../components/navbar/NavbarAr';
export default function ForPharmaciesAr() {

    return (
        <div className="caro">
            <NavbarAr compo={false} />
            <Carousel axis='vertical' showArrows={true} emulateTouch={true} showThumbs={false}>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#FFB800" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">يُداوي… شريكك الجديد في النمو</h1>
                                        <h2 className="col-10 p-1">يساعدك يُداوي على النمو سريعًا</h2>
                                        <p className="col-10 p-1 px-2">يُمكنك الآن زيادة مبيعاتك، والوصول إلى مستهلكين أكبر داخل وخارج منطقتك الجغرافية، والاستفادة فورًا بعروض الخصومات والمنتجات الحصرية. وتستطيع الصيدليات استقبال المزيد من الطلبات عبر بوابة يُداوي المُصمّمة لتحقيق أقصى درجات السرعة والدقة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: "#F45E5F" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">استمتع بزيادة في المبيعات</h1>
                                        <h2 className="col-10 p-1">حركة طلبات وإيرادات متزايدة</h2>
                                        <p className="col-10 p-1 px-2">تتمتّع شبكة صيدليات يُداوي بحركة طلبات متزايدة عبر بوابة الصيدليات والشركاء. الزيادة الملحوظة في المبيعات والإيرادات تجعل يُداوي الوجهة الرقمية المختارة لأكتر من 2000 صيدلية مرخصة في جميع أنحاء مصر</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#696B8D" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">احصل على عملاء جُدد</h1>
                                        <h2 className="col-10 p-1">وصول أسرع لملايين العملاء المحليين</h2>
                                        <p className="col-10 p-1 px-2">يضمن يُداوي لأكثر من 2,000 صيدلية معتمدة ومرخصة في 28 محافظة، وصولًا سريعاً إلى قاعدة متنامية تضم ملايين المستخدمين.بدءًا من الأمهات الشابات الباحثات عن منصة موثوقة وسهلة الاستخدام لاحتياجات الأسرة اليومية، وصولًا إلى المرضى المزمنين الباحثين عن مصدر موثوق لطلب أدويتهم كل شهر بسهولة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ height: '100vh', backgroundColor: "#87C36C" }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">اعرض منتجات حصرية</h1>
                                        <h2 className="col-10 p-1">المنتجات المفضلة للعملاء</h2>
                                        <p className="col-10 p-1 px-2">يُداوي هو الشريك المفضل لمجموعة من أكبر الشركات العاملة في مجال الرعاية الصحية محليًا وعالميًا. وتمتد شراكاتنا من شركات الأدوية إلى أشهر العلامات التجارية، لنُزوّد صيدليتك المعتمدة بمنتجات حصرية تلبي احتياجات العملاء</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ height: '100vh', backgroundColor: '#891E4A' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="row justify-content-center">
                                        <h1 className="col-10 p-1">استفد بأفضل المزايا في السوق</h1>
                                        <h2 className="col-10 p-1">كُن من الشركاء المفضلين لشبكة يُداوي المتطورة</h2>
                                        <p className="col-10 p-1 px-2">يُقدّم يداوي مزاياه لشبكة من الصيدليات المعتمدة، ويمنحها فرصة الاستفادة بأفضل المزايا في السوق لخدمة العملاء بشكل أفضل. منصة إدارة الصيدليات من يُداوي مُصمّمة خصيصاً لزيادة سرعة ودقة طلبات الصيدليات، وتحليلها، بالإضافة لفريق الدعم المتواجد على مدار الساعة لخدمتك.</p>
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