import React from 'react'
import BranchesAr from '../../components/branches/BranchesAr'
import NavbarAr from '../../components/navbar/NavbarAr'

export default function ShopAr() {
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

                        
                    </div>
                    <div className="col-8">
                        {/* products */}


                    </div>
                </div>
            </div>
            {/* footer */}


        </div>
    )
}
