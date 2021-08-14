import React, { useContext, useEffect, useState } from 'react'
import Branches from '../../components/branches/Branches'
import Navbar from '../../components/navbar/Navbar'
import { Context } from './../../context/Context';

import './index.scss'

export default function Shop() {
    const context = useContext(Context)
    const[products, setProducts] = useState([])
    
    
    useEffect(()=>{
        setProducts(context.products)
    },[context.products])



    return (
        <div className="shop">
            {/* navbar */}
                <Navbar compo={true} />
            {/* barnches */}
                <Branches nothome={false} />
            {/* sidebar and products */}
            <div className="container my-3">
                <div className="row">
                    <div className="d-none d-md-block col-3">
                        {/* sidebar */}
                    </div>
                    <div className="col-8">
                        {/* products */}
                        <div className="row">

                        </div>

                    </div>
                </div>
            </div>
            {/* footer */}


        </div>
    )
}
