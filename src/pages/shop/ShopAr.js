import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../context/Context';

import './index.scss'
import NavbarAr from './../../components/navbar/NavbarAr';
import BranchesAr from './../../components/branches/BranchesAr';
import SidebarAr from './../../components/sidebar/SidebarAr';
import FooterAr from './../../components/footer/FooterAr';
import ProductAr from './../../components/products/ProductAr';
import { NavLink } from 'react-router-dom';

export default function ShopAr() {
    const context = useContext(Context)
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(localStorage.setItem("show-style", localStorage.getItem("show-style") === null ? 4 : localStorage.getItem("show-style")))
    const [sort, setSort] = useState('')
    const[proCount,setProCount] = useState(30)
    const[page,setPage] = useState(1)

    function handleSortProucts(e){
        let sort = e.target.value ;
        setSort(sort)
        setProducts(products.sort((a,b) => (
            sort === 'low' ? ((a.price > b.price) ? 1 : -1) 
            : sort === 'high' ?  ((a.price < b.price) ? 1 : -1) 
            : sort === 'latest' ?  (a.date < b.date ? 1 : -1) 
            : ( a.id < b.id ? 1 : -1 )
        )))
    }
    function handleProCount(e){
        let proCount = e.target.value ;
        setProCount(proCount)
        setProducts(products.sort(() => (
            proCount === '30' ? setProCount(30) 
            : proCount === '60' ?  setProCount(60)
            : proCount === '90' ?  setProCount(90) 
            : proCount === '102' ?  setProCount(120) 
            : setProCount(products.length)
        )))
      }

    function showStyle(col) {
        setShow(localStorage.setItem("show-style", col))
    }

    useEffect(() => {
        setShow(localStorage.getItem("show-style"))
    }, [show])

    useEffect(() => {
        setProducts(context.filterd);
        setPage(1)
        setProCount(30) 
    }, [context.filterd]);
    
    function gototop(){
        window.scrollTo(0,0)
    }

    return (
        <div className="shop">
            {/* navbar */}
            <NavbarAr compo={true} />
            {/* barnches */}
            <BranchesAr nothome={false} />
            {/* sidebar and products */}
            {products != context.filterd ? 
                <div className="loading row">
                    <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : 
                <div className="container my-3">
                <div className="row">
                    <div className="d-none d-md-block col-3">
                        {/* sidebar */}
                        <SidebarAr />
                    </div>
                    <div className="col-12 col-md-8">
                        {/* products */}
                        <div className="filter border p-2 bg-light">
                            <div className="container">
                                <div className="row">
                                    <div className="d-none d-md-block col-5">
                                        <div className="icons">
                                            <button className="btn" onClick={() => showStyle(12)}>
                                                <i className="fas fa-bars" ></i>
                                            </button>
                                            <button className="btn" onClick={() => showStyle(6)}>
                                                <i className="fas fa-th-large"></i>
                                            </button>
                                            <button className="btn" onClick={() => showStyle(4)}>
                                                <i className="fas fa-th" ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={proCount} onChange={handleProCount}>
                                        <option defaultValue="30">30</option>
                                        <option value="60">60</option>
                                        <option value="90">90</option>
                                        <option value="120">120</option>
                                    </select>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" value={sort} onChange={handleSortProucts}>
                                            <option defaultValue="">الكل</option>
                                            <option value="latest">الأجدد</option>
                                            <option value="low">السعر: الأقل للأعلى</option>
                                            <option value="high">السعر: الأعلى للأقل</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products mt-3">
                            <div className="row">
                            {products.map((product,i) => (
                                i >= (page-1) * proCount && i < page * proCount  ?  
                                <div className={`col-12 col-sm-${show}`} key={product.id}>
                                <ProductAr
                                    product={product}
                                />
                                </div> : ""
                            ))}
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center py-0">
                                    {context.filterd.map((el,i) => 
                                    i < Math.ceil(context.filterd.length / proCount) ? 
                                    <NavLink to={`/shop/${i+1}`} onClick={()=>setPage(i+1)} key={el.id}>
                                        <li className="page-item" onClick={()=> gototop()}><span className="page-link">{i+1}</span></li>
                                    </NavLink>
                                    : ""
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {/* footer */}
            <FooterAr />

        </div>
    )
}
