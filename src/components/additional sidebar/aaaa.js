import React, { useEffect, useState } from 'react'
import Brands from "../brands/Brands"
import { useContext } from 'react';
import { Context } from './../../context/Context';

export default function aaaa() {
    const context = useContext(Context)
    const[cateSet, setCateSet] = useState(new Set())
    const[cateArr, setCateArr] = useState([])
    
    const[brSet, setbrSet] = useState(new Set())
    const[brArr, setbrArr] = useState([])

    useEffect(()=> {
        context.products.map(cate => setCateSet(cateSet.add(cate.categoryName)))
        setCateArr([...cateSet])
        context.products.map(br => setbrSet(brSet.add(br.categoryBranchName)))
        setbrArr([...brSet])

    },[context.products])

    // let c = true
    // const[c,setC]= useState()

    return (
        <div className="sidebar">
            {/* categories */}
            <div className="cate">
                {cateArr.map((el,i) => 
                    <div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id={`flush-heading${i}`}>
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${i}`} aria-expanded="false" aria-controls={`flush-collapse${i}`}>
                                        {el}
                                    </button>
                                </h2>
                                <div id={`flush-collapse${i}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${i}`} data-bs-parent="#accordionFlushExample">
                                    {brArr.map(b => {for(let j =0 ; j< context.products.length; j++){
                                            if(context.products[j].categoryName == el && context.products[j].categoryBranchName == b){
                                                return (<div class="accordion-body">{b}</div>)
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
            <Brands/>
        </div>
    )
}
