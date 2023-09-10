import React from 'react'
import "./About.css"
import Card from 'react-bootstrap/Card';
import img1 from "../../imges/about-icon-1.png"
import img2 from "../../imges/about-icon-3.png"
const About = () => {
    return (
        <>
        <div id='about' className='container-about'>
            <div className='container-info-about'>
                <h5>Who we are</h5>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis veritatis asperiores ut tenetur id similique quia quisquam? Praesentium amet ea ullam cumque, consequuntur aut culpa id cupiditate quae suscipit temporibus!</p>
            </div>
            <div className='container-crads-about'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Lorem ipsum dolord</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Lorem ipsum dolor</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. disserendi elegantiam, confuse loquitur.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default About
