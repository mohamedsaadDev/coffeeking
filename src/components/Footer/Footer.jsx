import React from 'react'
import "./Footer.css"
import logo from "../../imges/logo_white-7.png"
const Footer = () => {
    const date = new Date()
    return (
        <>
        <footer>
                <div className='container-blok-footer'>
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur aliquid, recusandae adipisci in autem velit tempora doloribus obcaecati quibusdam ex cupiditate excepturi ullam nihil deleniti ab labore quos soluta!</p>
                    
                </div>
                <ul className='container-blok-footer'>
                    <li><h3>EXPLORE</h3></li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#Blog">Blog</a></li>
                </ul>
                <ul className='container-blok-footer'>
                    <li><h3>CONTACT US</h3></li>
                    <li><i className="fa-solid fa-location-dot icon-footer"></i> 21 Lorem ipsum dolor sit</li>
                    <li><i className="fa-solid fa-phone icon-footer"></i> +0999334</li>
                    <li><i className="fa-solid fa-envelope icon-footer"></i>info@email.com</li>
                </ul>
        </footer>
        <div className='end-footer'>
            copyritght © {date.getFullYear()} By mohamed saad 
        </div>
        </>
    )
}

export default Footer