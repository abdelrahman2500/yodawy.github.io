import React, { useContext, useEffect, useState } from 'react'
import Branches from '../../components/branches/Branches'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from './../../context/Context';

import './index.scss'
import Footer from './../../components/footer/Footer';

export default function Shop() {
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
        setProducts(context.products)
    }, [context.products])

    return (
        <div className="shop">
            {/* navbar */}
            <Navbar compo={true} />
            {/* barnches */}
            <Branches nothome={false} />
            {/* sidebar and products */}
            <div className="container my-3">
                <div className="row">
                    <div className="d-none d-sm-block col-3">
                        {/* sidebar */}
                        <Sidebar />
                    </div>
                    <div className="col-12 col-sm-8">
                        {/* products */}
                        <div className="filter border p-2 bg-light">
                            <div className="container">
                                <div className="row">
                                    <div className="d-none d-md-block col-5">
                                        <div className="icons">
                                            <button className="btn" onClick={() => showStyle(12)}>
                                                <i class="fas fa-bars" ></i>
                                            </button>
                                            <button className="btn" onClick={() => showStyle(6)}>
                                                <i class="fas fa-th-large"></i>
                                            </button>
                                            <button className="btn" onClick={() => showStyle(4)}>
                                                <i class="fas fa-th" ></i>
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
                                        {product.price}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />

        </div>
    )
}
