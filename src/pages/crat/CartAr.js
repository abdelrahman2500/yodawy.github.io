import React from 'react'

import './index.scss'
import BestSellerAr from '../../components/bestSellers/BestSellerAr';
import { useContext } from 'react';
import { Context } from './../../context/Context';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarAr from './../../components/navbar/NavbarAr';
import FooterAr from './../../components/footer/FooterAr';

export default function CartAr() {
    const context = useContext(Context)

    useEffect(()=> {
        context.setCart(context.cart)
    },[])

    function increament(id){
        context.cart.map(el => el.id == id ? el.count< el.amount? el.count++ : "" : "")
        localStorage.setItem("cart-items", JSON.stringify(context.cart))
        context.setCart(JSON.parse(localStorage.getItem("cart-items")))
    }
    function decreament(id){
        context.cart.map(el => el.id == id && el.count >1 ? el.count-- : "")
        localStorage.setItem("cart-items", JSON.stringify(context.cart))
        context.setCart(JSON.parse(localStorage.getItem("cart-items")))
    }
    return (
        <div className="cart ar">
            <NavbarAr compo={true}/>
            
            <div className="container inner">
            {context.cart.length == 0 ? <div className="col-12 text-center p-5">
                <div className=" mb-3 bg-light m-auto p-5 rounded-circle"  style={{width:"fit-content"}}>
                    <i className="fas fa-shopping-cart" style={{fontSize:"5rem"}}></i>
                </div>
                
                <h2 className="h1">عربة التسوق فارغة!</h2>
            </div>
             : 
                <div className="row my-3">
                    <div className="col-12 col-md-8">
                        {context.cart.map((item) => 
                            <div className="card mb-3" style={{maxWidth: "100%"}} key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4 p-2 row justify-content-center align-items-center">
                                    <Link to="/shop" style={{display: "flex",justifyContent: "center"}} onClick={()=> context.setFilterd(context.products.filter(p => p.id == item.id))}>
                                        <img style={{maxWidth:"100%", maxHeight:"218px", width:"auto", height:"auto"}} src={`/images/products/${item.imagePath}`} className="img-fluid rounded-start" alt="..."/>
                                    </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nameAr}</h5>
                                            <p className="card-text">{item.descriptionAr}</p>
                                            <p className="card-text p-small">
                                                الكمية :
                                                <small className="text-muted fw-bold">
                                                    <button className="btn btn-info px-4" onClick={()=> decreament(item.id)}>-</button>
                                                        <span>{item.count}</span> 
                                                    <button className="btn btn-info px-4" onClick={()=> increament(item.id)}>+</button>
                                                </small>
                                            </p>
                                            <p className="card-text"><small className="text-muted">السعر : {item.price * item.count} جنيه مصري</small></p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn-close" aria-label="Close"  onClick={()=> context.removeFromCart(item)}></button>
                            </div>
                        )}
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <div className="card text-white bg-success mb-3 m-auto" style={{maxWidth: "18rem"}}>
                            <div className="card-header">الدفع</div>
                            <div className="card-body">
                                <h5 className="card-title mb-3">الإجمالي : {context.cart.reduce((a,c) => a + c.price*c.count , 0)}  جنيه مصري</h5>
                                {/* <button className="btn btn-light" onClick={()=> context.buyNow()}>إكمال عملية الدفع</button> */}
                                <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">إكمال عملية الدفع</button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog text-dark">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">عملية الدفع</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                backend needed to continue
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-danger mb-3" onClick={()=> window.confirm('هل أنت متأكد أنك ترغب في حذف كافة منتجات العربة')? context.deleteAll(): ""}>حذف الكل من عربة التسوق</button>
                    </div>
                </div>
            }
            </div>
            <BestSellerAr />
            <FooterAr />
        </div>
    )
}
