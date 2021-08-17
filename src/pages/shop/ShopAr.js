import React, { useContext, useEffect, useState } from 'react'
import Branches from '../../components/branches/Branches'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from './../../context/Context';

import './index.scss'
import Footer from './../../components/footer/Footer';
import NavbarAr from './../../components/navbar/NavbarAr';
import BranchesAr from './../../components/branches/BranchesAr';
import SidebarAr from './../../components/sidebar/SidebarAr';
import FooterAr from './../../components/footer/FooterAr';
import Product from './../../components/products/Product';
import ProductAr from './../../components/products/ProductAr';

export default function ShopAr() {
    const context = useContext(Context)
    const [products, setProducts] = useState([])
    const [show, setShow] = useState(localStorage.setItem("show-style", localStorage.getItem("show-style") === null ? 4 : localStorage.getItem("show-style")))


    function showStyle(col) {
        setShow(localStorage.setItem("show-style", col))
    }

    useEffect(() => {
        setShow(localStorage.getItem("show-style"))
    }, [show])

    useEffect(() => {
        setProducts(context.filterd)
    }, [context.filterd])

    return (
        <div className="shop">
            {/* navbar */}
            <NavbarAr compo={true} />
            {/* barnches */}
            <BranchesAr nothome={false} />
            {/* sidebar and products */}
            <div className="container my-3">
                <div className="row">
                    <div className="d-none d-md-block col-3">
                        {/* sidebar */}
                        <SidebarAr />
                    </div>
                    {products.length != context.filterd.length ? 
                        <div className="container loading">
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden m-auto">Loading...</span>
                        </div>
                        </div> :
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
                                    <div className="col-6 col-md-4"></div>
                                    <div className="col-6 col-md-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="products mt-3">
                            <div className="row">
                                {products.map(product =>
                                    <div className={`col-12 col-sm-${show}`} key={product.id}>
                                    <ProductAr
                                        product={product}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            {/* footer */}
            <FooterAr />

        </div>
    )
}
