import React from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function Shop() {
    return (
        <div className="shop">
            {/* navbar */}
                <Navbar />
            {/* barnches */}

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
