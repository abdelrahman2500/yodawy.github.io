import React from 'react'

export default function SubscribeAr() {
    return (
        <div className="subscribe text-center p-5 my-3 ar" >
            <div className="container">
                <h2 className="h1 m-auto mb-4 fw-bold">اشترك في النشرة الإخبارية لدينا والبقاء على اطلاع دائم <br />
                مع أحدث العروض والصفقات اليوم.</h2>
                <form className="m-auto text-center my-3">
                    <input className="btnm px-5 py-3" type="email" placeholder="اكتب اميلك" required />
                    <input className="btns px-5 py-3 fw-bold" type="button" value="إشترك"/>
                </form> 
            </div>
        </div>
    )
}
