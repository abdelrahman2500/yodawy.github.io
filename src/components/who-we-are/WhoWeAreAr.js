import React from 'react'
import './index.scss'

export default function WhoWeAreAr() {
    return (
        <div className="who-we-are ar my-3">
            <div className="container">
                <div className="top mb-5">
                    <h2 className="text-center h1 fw-bold">من نحن؟</h2>
                    <p className="pp lead text-center" >يُداوي هو دليل الصحة والجمال رقم واحد في مصر،<br/>والمنصة الشاملة لكل ما تحتاجه من أجل حياة صحية.</p>
                </div>
                <div className="cont row text-center"  >
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-shopping-cart fa-3x mb-4" ></i>
                        <h5 className="fw-bold">شبكة صيدليات ضخمة</h5>
                        <p className="lead">يضُم يُداوي أكثر من 4,000 صيدلية معتمدة ومرخصة في جميع أنحاء مصر، مع فريق خدمة عملاء متاح على مدار الساعة وطوال أيام الأسبوع لخدمتك.</p>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-mobile fa-3x mb-4"></i>
                        <h5 className="fw-bold">تجربة سهلة الاستخدام</h5>
                        <p className="lead">يعمل يُداوي على تسهيل حياة كل مريض ببناء منصات رعاية صحية متطورة، توفر كافة احتياجاتك الصحية بكل سهولة لتطلبها من مكانك.</p>
                    </div>
                    <div className="box p-3 col-lg-4 col-md-4 col-sm-12">
                        <i className="fa fa-phone fa-3x mb-4" ></i>
                        <h5 className="fw-bold">مكان واحد لكل احتياجاتك</h5>
                        <p className="lead">يُغطي يُداوي كافة احتياجات الصحة والجمال، سواءً طلبات الصيدلية، أو موافقات التأمين، أو الاستشارات الطبية السريعة عبر الهاتف.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
