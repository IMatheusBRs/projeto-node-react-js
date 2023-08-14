import React from 'react'
import { FaDog } from "react-icons/fa";

function LandingPage() {
    return (
        <>
            <div className="app">
                <img src="/uniceplacs-removebg.png" alt="uniceplac" style={{ height:'500px'}}/>
                <span style={{ fontSize: '2.5rem', color:'black' }}>MEDICINA VETERINÁRIA UNICEPLAC </span>
                <span> <FaDog style={{ fontSize: '3rem', color: 'black' }} /><br /></span>
            </div>
            <div style={{ float: 'right' }}></div>
        </>
    )
}

export default LandingPage
