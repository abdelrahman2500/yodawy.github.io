import React from 'react'

import './index.scss'
import { Link } from 'react-router-dom';
import NavbarAr from './../../components/navbar/NavbarAr';
import BranchesAr from './../../components/branches/BranchesAr';
import FooterAr from './../../components/footer/FooterAr';

export default function BlogAr() {
    return (
        <div className="blog ar">
        <NavbarAr  compo={true}/>
        <BranchesAr nothome={false} />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 ">
                        <div className="blogcard row">
                            <div className=" col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/mid-section-woman-having-stomach-ache_23-2147948390.jpeg"/>
                                    </div> 
                                    <div className="card-body px-0">
                                        <h6 className="card-title">مارس 18, 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>إيه هي جرثومة المعدة؟ (الوقاية والأعراض والعلاج)</h4></Link>
                                            <p>تُعتبر جرثومة المعدة من الأمراض الأكثر شيوعًا بين الناس، لدرجة أنّها بتصيب نحو نصف سكان العالم تقريبًا بحسب المكتبة الوطنية للطب في الولايات المتحدة، وبتسبب سلسلة من الأمراض في الجهاز الهضمي.</p>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/diana-polekhina-ZSpkUThb7qk-unsplash-992x525.jpg" />
                                    </div>
                                        <div className="card-body px-0">
                                        <h6 className="card-title">22 مارس 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>كم عدد السعرات الحرارية التي يجب أن أتناولها كل يوم؟</h4></Link>
                                            <p>هذا هو السؤال الذي يطرحه معظم الناس ، ويتساءلون ما إذا كان هذا الطعام أو ذاك مفيدًا لنظامهم الغذائي أم لا. والسعرات الحرارية في هذا الصدد هي كمية الطاقة التي نحصل عليها من الأطعمة التي نستهلكها.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card">
                                    <div className="trans ">
                                        <img className="card-img-top" src="/images/blog/image/john-cameron-9xpBfMMcCj4-unsplash-992x525.jpg"/>
                                    </div>
                                        <div className="card-body px-0">
                                        <h6 className="card-title">22 مارس 2021</h6>
                                        <div className="card-text">
                                            <Link className="text-decoration-none" to="/blog"><h4>ما الفرق بين اختبار المستضد واختبارات تفاعل البوليميراز المتسلسل لفيروس كورونا؟</h4></Link>
                                            <p>تسبب انتشار السارس- CoV-2 ومرضه كوفيد-19 في الكثير من الجدل حول شكل الحياة الحديثة في العديد من الجوانب.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-12 col-md-4 col-lg-4">
                        <div className="row d-none d-md-block">
                            <div className="category col-12 mb-4">
                                <h3 className="fw-bold mb-3">فئات</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">اللياقة ونمط الحياة</p>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">المشورة الصحية</p>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/blog'>
                                            <p className="lead">العالم بعد كوفيد-19</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tags col-12">
                                <h3 className="fw-bold mb-3">العلامات</h3>
                                <div className="t text-uppercase">
                                    <span className="m-1"><Link to="/blog">مولد المضاد</Link></span>
                                    <span className="m-1"><Link to="/blog">سعرات حراريه</Link></span>
                                    <span className="m-1"><Link to="/blog">فيروس كورونا</Link></span>
                                    <span className="m-1"><Link to="/blog">كوفيد-19</Link></span>
                                    <span className="m-1"><Link to="/blog">نصيحة صحية</Link></span>
                                    <span className="m-1"><Link to="/blog">حياة صحية</Link></span>
                                    <span className="m-1"><Link to="/blog">متلازمة القولون المتهيج</Link></span>
                                    <span className="m-1"><Link to="/blog">أسلوب الحياة</Link></span>
                                    <span className="m-1"><Link to="/blog">بى سى أر</Link></span>
                                    <span className="m-1"><Link to="/blog">أعراض</Link></span>
                                    <span className="m-1"><Link to="/blog">لياقة بدنية</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="drops d-md-none mb-5">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        فئات
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <div className="category">
                                            <div className="row">
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">لياقة بدنية ونمط حياة</p>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">المشورة الصحية</p>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <Link to='/blog'>
                                                            <p className="lead">العالم بعد كوفيد -19</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    العلامات
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="tags col-12">
                                                <div className="t text-uppercase">
                                                    <span className="m-1"><Link to="/blog">مولد المضاد</Link></span>
                                                    <span className="m-1"><Link to="/blog">سعرات حراريه</Link></span>
                                                    <span className="m-1"><Link to="/blog">فيروس كورونا</Link></span>
                                                    <span className="m-1"><Link to="/blog">كوفيد-19</Link></span>
                                                    <span className="m-1"><Link to="/blog">نصيحة صحية</Link></span>
                                                    <span className="m-1"><Link to="/blog">حياة صحية</Link></span>
                                                    <span className="m-1"><Link to="/blog">متلازمة القولون المتهيج</Link></span>
                                                    <span className="m-1"><Link to="/blog">أسلوب الحياة</Link></span>
                                                    <span className="m-1"><Link to="/blog">بى سى أر</Link></span>
                                                    <span className="m-1"><Link to="/blog">أعراض</Link></span>
                                                    <span className="m-1"><Link to="/blog">لياقة بدنية</Link></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterAr />
        </div>
    )
}
