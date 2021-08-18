import React from "react";
import "./index.scss";
import NavbarAr from "../../components/navbar/NavbarAr";
import BranchesAr from "../../components/branches/BranchesAr";
import FooterAr from './../../components/footer/FooterAr';

export default function ContactAr() {
  return (
    <div className="ar">
      <NavbarAr compo={true} />
      <BranchesAr nothome={false} />

      <div className="container-fluid ">
        <div className="row main-div p-4">
          <div className="col-12 col-md-7 mb-4 accordion-div text-end">
            <h2 className="vc-custom-heading  head1">الأسئلة الشائعة</h2>
            <p className="lead">
              .اقرأ الأسئلة الشائعة التالية وإجاباتها قبل التواصل معنا
            </p>
            <div className="accordion " id="accordionExample">
              <div className="accordion-item  ">
                <h2 className="accordion-header " id="headingOne">
                  <button
                    className="accordion-button fw-bold  "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    كيف أطلب من يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    كل ما عليك فعله هو تنزيل التطبيق ثم إضافة منتجات الصيدلية
                    المرغوبة، أو تحميل صورة الروشتة أو صورة المنتج، وسيتكفّل
                    .فريقنا بتوصيل الطلب إلى منزلك من أقرب صيدلية
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    كيف أطلب روشتات التأمين من يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    إذا كانت شركة تأمينك من شركاء يُداوي، تستطيع بكل بساطة إدخال
                    بيانات بطاقتك التأمينية على التطبيق، وتحميل صورة من الروشتة
                    .لتقديم الطلب
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ما هى المناطق التى يُغطيها يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    يُغطّي يُداوي 28 محافظة في مصر. وبمجرد تقديم الطلب على
                    التطبيق، يُرسله فريقنا إلى أقرب صيدلية مُعتمدة ليصلك في أسرع
                    وقت. إذا لم تكن شبكة صيدليات يُداوي تُغطي منطقتك، فيُمكنك
                    التواصل معنا عبر صفحاتنا على شبكات التواصل الاجتماعي أو ملء
                    الطلب أسفل الصفحة، وسنعمل على ضمّ صيدليات أقرب لمنطقتك قبل
                    .طلبك التالي
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    كم يستغرق توصيل الطلبات عبر يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    يعمل فريقنا على تحسين سرعة التوصيل. وربما تختلف مواعيد تسليم
                    الطلبات حسب محتويات الطلب وتوافرها. ويستغرق توصيل الطلبات في
                    .المعتاد أقل من 45 إلى 60 دقيقة في المعتاد
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    هل تواجهك مشكلة فى الطلب من يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    يمكنك التواصل معنا عبر صفحاتنا على شبكات التواصل الاجتماعي
                    أو على الرقم الساخن 15005، وسيعمل فريقنا على حلها في أقرب
                    .وقت
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    لم يصلك رمز التحقق ؟
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    لنضمن تسجيل حسابك برقم هاتفك الحقيقي، سنرسل لك رمز التحقق
                    عبر رسالة نصية، ويجب عليك إدخاله للتسجيل. وإذا لم تصلك رسالة
                    نصية بالرمز، فعليك التواصل معنا عبر صفحاتنا على شبكات
                    التواصل الاجتماعي (فيسبوك وإنستغرام)، أو راسلنا عبر البريد
                    الإلكتروني hello@yodawy.com برقمك الذي استخدمته للتسجيل،
                    .وسيعمل فريقنا على حل مشكلتك في أقرب وقتٍ مُمكن
                  </div>
                </div>
              </div>
              <div className="accordion-item ">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    هل لديك صيدلية وترغب فى الانضمام إلى شبكة يُداوى ؟
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    يتطلّع يُداوي باستمرار إلى توسيع شبكة الصيدليات المعتمدة
                    لتُغطّي جميع المناطق. اترك لنا بيانات صيدليتك ومعلومات
                    التواصل معك باستخدام الطلب أسفل الصفحة، وسنتواصل معك في أسرع
                    .وقتٍ ممكن
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5  form-div text-end">
            <h2 className="head2">
              املأ الطلب إذا كان لديك سؤال أو استفسار آخر.
            </h2>
            <form className="row g-3 form ">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control name text-end"
                  id="inputAddress"
                  placeholder="الاسم الاول والاخير"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control email text-end"
                  id="inputEmail4"
                  placeholder="بريدك الالكترونى"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control phone text-end"
                  id="inputAddress"
                  placeholder="رقم التليفون"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control message text-end"
                  id="exampleFormControlTextarea1"
                  placeholder="رسالة"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12 ">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    أنا لست برنامج روبوت
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button onClick={(e)=> e.preventDefault()} className="btn fw-bold ">
                  أرسل
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
