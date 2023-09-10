import React from 'react'
import "./Home.css"
import logoHome from "../../imges/home-2-logo-1.png"
const Home = () => {
    return (
        <div id='home' className='continer-Home'>
            <img src={logoHome} alt="" />
        </div>
    )
}

export default Home