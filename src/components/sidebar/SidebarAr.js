import React, { useEffect, useState } from 'react'
import Brands from "../brands/Brands"
import { useContext } from 'react';
import { Context } from './../../context/Context';

import './index.scss'
import BrandsAr from './../brands/BrandsAr';

export default function SidebarAr() {
    const context = useContext(Context)
    const[cateSet, setCateSet] = useState(new Set())
    const[cateArr, setCateArr] = useState([])
    
    const[brSet, setbrSet] = useState(new Set())
    const[brArr, setbrArr] = useState([])

    useEffect(()=> {
        context.products.map(cate => setCateSet(cateSet.add(cate.categoryNameAr)))
        setCateArr([...cateSet])
        context.products.map(br => setbrSet(brSet.add(br.categoryBranchNameAr)))
        setbrArr([...brSet])

    },[context.products])

    // let c = true
    // const[c,setC]= useState()

    return (
        <div className="sidebar ar">
            {/* categories */}
            <div className="cate">
            <h3 className="mb-3 fw-bold" onClick={()=> context.setFilterd(context.products)}>المصنفات</h3>
                {cateArr.map((el,i) => 
                    <div  key={el}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={`flush-heading${i}`}>
                                    <button  className="accordion-button collapsed px-0 py-1 text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>
                                        <h5 onClick={()=> context.setFilterd(context.products.filter(p => p.categoryNameAr == el))}>{el}</h5>
                                    </button>
                                </h2>
                                <div id={`flush-collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                                    {brArr.map(b => {for(let j =0 ; j< context.products.length; j++){
                                            if(context.products[j].categoryNameAr == el && context.products[j].categoryBranchNameAr == b){
                                                return (<div className="accordion-body py-1 " key={b}>
                                                    <span className="branch" onClick={()=> context.setFilterd(context.products.filter(p => p.categoryBranchNameAr == b))}>{b}</span>
                                                </div>)
                                            }
                                        }})
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        {/* {el} */}
                        



                        {/* {context.products.map(s=> s.categoryName == el ? <div>{s.categoryBranchName}</div> : "")} */}
                    </div>
                    
                    
                )}
            </div>
            {/* brands */}
            <BrandsAr/>
        </div>
    )
}
