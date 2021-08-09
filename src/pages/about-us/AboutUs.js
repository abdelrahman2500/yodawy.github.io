import React, { useContext } from 'react'
import { Context } from './../../context/Context';

export default function AboutUs() {
    const con = useContext(Context)

    return (
        <div>
            {/* <Navbar /> */}
            {con.state}
        </div>
    )
}
